import { FC } from 'react';

import { Button, Flex, Text, TextInput, spacing } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import { AuthStore } from 'features/AuthStore';
import { LoginPageModel } from 'pages/login/LoginPageModel';
import { useInject } from 'shared/utils/hooks/useInject';

export const LoginPage: FC = observer(() => {
  const model = useInject(LoginPageModel);
  const authStore = useInject(AuthStore);

  if (authStore.isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Flex centerContent width="100%" minHeight="100%">
      <Flex centerContent direction="column" width="100%" maxWidth="350px" as="form">
        <Text className={spacing({ mb: 4 })} variant={'header-1'}>
          Вход
        </Text>
        <TextInput
          placeholder={'Номер телефона'}
          value={model.phone}
          onUpdate={model.setPhone.bind(model)}
        />
        <TextInput
          placeholder={'Код'}
          className={spacing({ mt: 2 })}
          value={model.code}
          onUpdate={model.setCode.bind(model)}
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
          onClick={model.loginClicked.bind(model)}
          loading={model.loading}
          disabled={model.phone.length === 0 || model.code.length === 0}
        >
          Войти
        </Button>
      </Flex>
    </Flex>
  );
});
