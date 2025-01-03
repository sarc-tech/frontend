import { Theme } from '@gravity-ui/uikit';
import { action, computed, makeAutoObservable, observable } from 'mobx';

const DARK: Theme = 'dark';
const LIGHT: Theme = 'light';

export class AppTheme {
  @observable
  theme: Theme = DARK;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  toggle() {
    this.theme = this.theme === DARK ? LIGHT : DARK;
  }

  @computed
  get isDark(): boolean {
    return this.theme === DARK;
  }
}

export const appTheme = new AppTheme();
