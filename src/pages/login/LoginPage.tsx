import { FC, useEffect, useRef, useState } from 'react';

import { Button, Flex, PinInput, Text, TextInput, spacing } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import { AuthStore } from 'features/AuthStore';
import { LoginPageModel } from 'pages/login/LoginPageModel';
import { useInject } from 'shared/utils/hooks/useInject';

const ONE_SECOND_MS = 1000;
const SMS_ATTEMT_TIME_SEC = 3;

const useSmsCodeTimer = () => {
  const [count, setCount] = useState(SMS_ATTEMT_TIME_SEC);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const setupTimer = () => {
    intervalIdRef.current = setInterval(() => {
      setCount((count) => count - 1);
    }, ONE_SECOND_MS);
  };

  useEffect(() => {
    if (count <= 0) {
      clearInterval(intervalIdRef.current);
    }
  }, [count]);

  return {
    setupTimer,
    count, // TODO: rename
  };
};

export const LoginPage: FC = observer(() => {
  const model = useInject(LoginPageModel);
  const authStore = useInject(AuthStore);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);
  const { setupTimer, count } = useSmsCodeTimer();

  useEffect(() => {
    switch (model.step) {
      case 0:
        phoneInputRef.current?.focus();
        break;
      case 1:
        codeInputRef.current?.focus();
        setupTimer();
        break;
    }
  }, [model.step]);

  if (authStore.isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Flex centerContent direction="column" width="100%" minHeight="100%">
      <Flex centerContent direction="column" width="100%" maxWidth="200px" as="form">
        {model.step === 0 && (
          <>
            <Text className={spacing({ mb: 4 })} variant={'header-1'}>
              Вход
            </Text>
            <TextInput
              controlRef={phoneInputRef}
              type="tel"
              placeholder={'Номер телефона'}
              value={model.phone}
              onUpdate={(phone) => model.setPhone(phone)}
            />
            <Button
              view="action"
              type="submit"
              className={spacing({ mt: 4 })}
              onClick={() => model.requestCode()}
              loading={model.loading}
              disabled={model.phone.length === 0}
            >
              Отправить код
            </Button>
          </>
        )}

        {model.step === 1 && (
          <>
            <Text className={spacing({ mb: 3 })} variant={'header-1'}>
              Введите код
            </Text>
            <Text className={spacing({ mb: 1 })} variant={'body-1'} color={'secondary'}>
              {model.phone}
            </Text>
            <PinInput
              apiRef={codeInputRef}
              length={LoginPageModel.CODE_SIZE}
              className={spacing({ mt: 2 })}
              value={model.code}
              onUpdate={(code) => model.setCode(code)}
            />
            {model.formError !== null && (
              <Text color={'danger'} className={spacing({ my: 1 })}>
                {model.formError}
              </Text>
            )}
            <Button
              view="action"
              type="submit"
              className={spacing({ mt: 4 })}
              onClick={() => model.confirmCode()}
              loading={model.loading}
              disabled={count !== 0}
            >
              Отправить код
            </Button>
            <p>Отправить повтоорно через: {count}</p>
          </>
        )}
      </Flex>
      <Flex alignItems={'flex-end'} width="100%">
        test
      </Flex>
    </Flex>
  );
});
