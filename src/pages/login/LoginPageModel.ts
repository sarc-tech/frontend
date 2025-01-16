import { inject } from 'inversify';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

import { AuthStore } from 'features/AuthStore';
import { SarcApiClient } from 'shared/api/SarcApiClient';

export class LoginPageModel {
  @observable
  phone = '';

  @observable
  code = '';

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
  setPhone(phone: string) {
    this.phone = phone;
    this.formError = null;
  }

  @action
  setCode(code: string) {
    this.code = code;
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
      await this.apiClient.users.sendSms(this.phone);
      const tokenResponse = await this.apiClient.users.checkSms(this.phone, this.code);
      this.authStore.setToken(tokenResponse.token);
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
