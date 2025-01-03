import { action, makeAutoObservable, observable } from 'mobx';

export class SideMenuState {
  @observable
  compact = false;
  constructor() {
    makeAutoObservable(this);
  }

  @action
  setCompact(compact: boolean) {
    this.compact = compact;
  }
}

export const sideMenuState = new SideMenuState();
