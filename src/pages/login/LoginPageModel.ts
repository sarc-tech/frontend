import { inject } from 'inversify';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

import { AuthStore } from 'features/AuthStore';
import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';

import { LoginPage } from './LoginPage';

export class LoginPageModel {
  static CODE_SIZE = 6;

  @observable
  phone = '';

  @observable
  code: string[] = [];

  @observable
  loading = false;

  @observable
  step = 0;

  @observable
  formError: string | null = null;

  private readonly apiClient: SarcApiClient;
  private readonly authStore: AuthStore;
  private readonly handleNetworkErrorUseCase: HandleNetworkErrorUseCase;

  constructor(
    @inject(SarcApiClient) apiClient: SarcApiClient,
    @inject(AuthStore) authStore: AuthStore,
    @inject(HandleNetworkErrorUseCase) handleNetworkErrorUseCase: HandleNetworkErrorUseCase,
  ) {
    this.apiClient = apiClient;
    this.authStore = authStore;
    this.handleNetworkErrorUseCase = handleNetworkErrorUseCase;
    makeAutoObservable(this);
  }

  @action
  setPhone(phone: string) {
    this.phone = phone;
    this.formError = null;
  }

  @action
  setCode(code: string[]) {
    this.code = code;
    this.formError = null;
    const codeSize = this.code.filter((charString) => charString.length > 0).length;
    if (codeSize === LoginPageModel.CODE_SIZE) {
      this.confirmCode();
    }
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
  async requestCode() {
    this.loading = true;
    this.formError = null;

    try {
      await this.apiClient.users.sendSms(this.phone);
      runInAction(() => {
        this.step = 1;
      });
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
    runInAction(() => {
      this.loading = false;
    });
  }

  @action
  async confirmCode() {
    this.loading = true;
    try {
      const tokenResponse = await this.apiClient.users.checkSms(this.phone, this.code.join(''));
      this.authStore.setToken(tokenResponse.token);
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
    runInAction(() => {
      this.loading = false;
    });
  }
}
