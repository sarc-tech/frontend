import { FC, useState } from 'react';

import { Button, Flex, PasswordInput, Text, TextInput, spacing } from '@gravity-ui/uikit';
import { Navigate } from 'react-router';

import { useAuthStore, useUserLogged } from 'features/auth';
import { apiClient } from 'shared/api/ApiClient';

const useLogin = () => {
  const userLogged = useUserLogged();
  const authState = useAuthStore();
  const [email, _setEmail] = useState('');
  const [password, _setPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [formError, setError] = useState<string | null>(null);
  const onClickLogin = () => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const token = await apiClient.login(email, password);
        authState.setToken(token);
      } catch {
        setError('Не правильный логин или пароль');
      }
      setLoading(false);
    })();
  };

  return {
    userLogged,
    email,
    password,
    formError,
    loading,
    setEmail: (newEmail: string) => {
      _setEmail(newEmail);
      setError(null);
    },
    setPassword: (newPassword: string) => {
      _setPassword(newPassword);
      setError(null);
    },
    onClickLogin,
  };
};

export const LoginPage: FC = () => {
  const { userLogged, email, password, formError, loading, setEmail, setPassword, onClickLogin } =
    useLogin();

  if (userLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Flex centerContent width="100%" minHeight="100%">
      <Flex centerContent direction="column" width="100%" maxWidth="350px" as="form">
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
        {formError !== null && (
          <Text color={'danger'} className={spacing({ my: 1 })}>
            {formError}
          </Text>
        )}
        <Button
          view="action"
          type="submit"
          className={spacing({ mt: 4 })}
          onClick={onClickLogin}
          loading={loading}
          disabled={email.length === 0 || password.length === 0}
        >
          Войти
        </Button>
      </Flex>
    </Flex>
  );
};
