import { inject } from 'inversify';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

import { AuthStore } from 'features/AuthStore';
import { SarcApiClient } from 'shared/api/SarcApiClient';

export class LoginPageModel {
  @observable
  email = '';

  @observable
  password = '';

  @observable
  loading = false;

  @observable
  formError: string | null = null;

  private readonly apiClient: SarcApiClient;
  private readonly authStore: AuthStore;

  constructor(
    @inject(SarcApiClient) apiClient: SarcApiClient,
    @inject(AuthStore) authStore: AuthStore,
  ) {
    this.apiClient = apiClient;
    this.authStore = authStore;
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
      const token = await this.apiClient.login(this.email, this.password);
      this.authStore.setToken(token);
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
