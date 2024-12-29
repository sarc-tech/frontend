import { FC, useState } from 'react';

import { Button, Flex, PasswordInput, Text, TextInput, spacing } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'ui/components/app-router/AppRouter';

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Flex centerContent width="100%" minHeight="100%">
      <Flex centerContent direction="column" width="100%" maxWidth="350px">
        <Text className={spacing({ mb: 4 })} variant={'header-1'}>
          Вход
        </Text>
        <TextInput placeholder={'Email'} value={email} onUpdate={setEmail} />
        <PasswordInput
          placeholder={'Пароль'}
          className={spacing({ mt: 2 })}
          value={password}
          onUpdate={setPassword}
        />
        <Button className={spacing({ mt: 4 })} onClick={() => navigate(AppRoutes.calls)}>
          Открыть личный кабинет
        </Button>
      </Flex>
    </Flex>
  );
};
