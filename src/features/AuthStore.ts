import { action, computed, makeAutoObservable, observable, reaction } from 'mobx';

export class AuthStore {
  private static localStorageKey = 'authToken';

  @observable
  token: string | null = null;

  constructor() {
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
