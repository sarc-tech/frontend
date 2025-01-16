import { inject } from 'inversify';
import { action, autorun, computed, makeAutoObservable, observable, reaction } from 'mobx';

import { SarcApiClient } from 'shared/api/SarcApiClient';

export class AuthStore {
  private static localStorageKey = 'authToken';

  @observable
  token: string | null = null;

  private readonly apiClient: SarcApiClient;

  constructor(@inject(SarcApiClient) apiClient: SarcApiClient) {
    this.apiClient = apiClient;
    makeAutoObservable(this);
    this.token = localStorage.getItem(AuthStore.localStorageKey);

    // пока не сохраняем disposer никуда, потому что стор глобальный
    reaction(
      () => this.token,
      (token) => {
        if (token !== null) {
          localStorage.setItem(AuthStore.localStorageKey, token);
        } else {
          localStorage.removeItem(AuthStore.localStorageKey);
        }
      },
    );

    // пробрасываем изначальное значение и все изменения токена в apiClient
    autorun(() => this.apiClient.setAuthToken(this.token));
  }

  @action
  setToken(token: string) {
    this.token = token;
  }

  @action
  clearToken() {
    this.token = null;
  }

  @computed
  get isLogged(): boolean {
    return this.token !== null;
  }
}
