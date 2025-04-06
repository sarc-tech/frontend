import { SelectOption } from '@gravity-ui/uikit/build/esm/components/Select/types';
import { inject } from 'inversify';
import { makeAutoObservable, observable, runInAction } from 'mobx';

import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';

export class CreateTeamPageModel {
  @observable
  listTeams: SelectOption[] = [];

  @observable
  listTeamsLoading = false;

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
    runInAction(() => {
      this.listTeamsLoading = true;
    });
    try {
      const teamsResponse = await this.apiClient.teams.getTeams();
      const teams = teamsResponse.data.map((team) => ({
        value: team.id,
        content: team.name,
      }));
      runInAction(() => {
        this.listTeams = teams;
      });
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
    runInAction(() => {
      this.listTeamsLoading = false;
    });
  }
}
