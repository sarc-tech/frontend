import { FC, useState } from 'react';

import { Button, Flex, PasswordInput, Text, TextInput, spacing } from '@gravity-ui/uikit';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import { authStore } from 'features/AuthStore';
import { apiClient } from 'shared/api/ApiClient';

class LoginPageModel {
  @observable
  email = '';

  @observable
  password = '';

  @observable
  loading = false;

  @observable
  formError: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setEmail(email: string) {
    this.email = email;
    this.formError = null;
  }

  @action
  setPassword(password: string) {
    this.password = password;
    this.formError = null;
  }

  @action
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  @action
  setFormError(formError: string | null) {
    this.formError = formError;
  }

  @action
  async loginClicked() {
    this.loading = true;
    this.formError = null;

    try {
      const token = await apiClient.login(this.email, this.password);
      authStore.setToken(token);
    } catch {
      runInAction(() => {
        this.formError = 'Не правильный логин или пароль';
      });
    }
    runInAction(() => {
      this.loading = false;
    });
  }
}

export const LoginPage: FC = observer(() => {
  const [model] = useState(() => new LoginPageModel());

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
          placeholder={'Email'}
          value={model.email}
          onUpdate={model.setEmail.bind(model)}
        />
        <PasswordInput
          placeholder={'Пароль'}
          className={spacing({ mt: 2 })}
          value={model.password}
          onUpdate={model.setPassword.bind(model)}
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
          disabled={model.email.length === 0 || model.password.length === 0}
        >
          Войти
        </Button>
      </Flex>
    </Flex>
  );
});
