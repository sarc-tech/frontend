import { inject } from 'inversify';
import { makeAutoObservable, observable, runInAction } from 'mobx';

import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { Team } from 'shared/api/generated';

export class TeamsPageModel {
  @observable
  teams: Team[] = [];

  private readonly apiClient: SarcApiClient;
  private readonly handleNetworkErrorUseCase: HandleNetworkErrorUseCase;

  constructor(
    @inject(SarcApiClient) apiClient: SarcApiClient,
    @inject(HandleNetworkErrorUseCase) handleNetworkErrorUseCase: HandleNetworkErrorUseCase,
  ) {
    this.apiClient = apiClient;
    this.handleNetworkErrorUseCase = handleNetworkErrorUseCase;
    makeAutoObservable(this);
    this.loadTeams();
  }

  async loadTeams() {
    try {
      const teamsResponse = await this.apiClient.teams.getTeams();
      runInAction(() => {
        this.teams = teamsResponse.data;
      });
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
  }
}
