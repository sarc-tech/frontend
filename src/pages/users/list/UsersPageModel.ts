import { inject } from 'inversify';
import { makeAutoObservable, observable, runInAction } from 'mobx';

import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { User } from 'shared/api/generated';

export class UsersPageModel {
  @observable
  users: User[] = [];

  private readonly apiClient: SarcApiClient;
  private readonly handleNetworkErrorUseCase: HandleNetworkErrorUseCase;

  constructor(
    @inject(SarcApiClient) apiClient: SarcApiClient,
    @inject(HandleNetworkErrorUseCase) handleNetworkErrorUseCase: HandleNetworkErrorUseCase,
  ) {
    this.apiClient = apiClient;
    this.handleNetworkErrorUseCase = handleNetworkErrorUseCase;
    makeAutoObservable(this);
    this.loadUsers();
  }

  async loadUsers() {
    try {
      const usersResponse = await this.apiClient.users.getUsers();
      runInAction(() => {
        this.users = usersResponse.data;
      });
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
  }
}
