import { inject } from 'inversify';
import { makeAutoObservable, observable, runInAction } from 'mobx';

import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { Status } from 'shared/api/generated';

export class StatusesPageModel {
  @observable
  statuses: Status[] = [];

  private readonly apiClient: SarcApiClient;
  private readonly handleNetworkErrorUseCase: HandleNetworkErrorUseCase;

  constructor(
    @inject(SarcApiClient) apiClient: SarcApiClient,
    @inject(HandleNetworkErrorUseCase) handleNetworkErrorUseCase: HandleNetworkErrorUseCase,
  ) {
    this.apiClient = apiClient;
    this.handleNetworkErrorUseCase = handleNetworkErrorUseCase;
    makeAutoObservable(this);
    this.loadStatuses();
  }

  private async loadStatuses() {
    try {
      const statusesResponse = await this.apiClient.statuses.getStatuses();
      runInAction(() => {
        this.statuses = statusesResponse.data;
      });
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
  }
}
