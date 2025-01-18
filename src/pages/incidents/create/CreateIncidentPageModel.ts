import { inject } from 'inversify';
import { action, makeAutoObservable } from 'mobx';
import { Router } from 'react-router-dom';

import type { RouterType } from 'app/app-router/RouterType';
import { AppRoutes } from 'app/app-router/app-routes';
import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';

export class CreateIncidentPageModel {
  private readonly sarcApiClient: SarcApiClient;
  private readonly handleNetworkErrorUseCase: HandleNetworkErrorUseCase;
  private readonly router: RouterType;

  constructor(
    @inject(SarcApiClient) sarcApiClient: SarcApiClient,
    @inject(HandleNetworkErrorUseCase) handleNetworkErrorUseCase: HandleNetworkErrorUseCase,
    @inject(Router) router: RouterType,
  ) {
    this.sarcApiClient = sarcApiClient;
    this.handleNetworkErrorUseCase = handleNetworkErrorUseCase;
    this.router = router;
    makeAutoObservable(this);
  }

  @action
  async submitForm(formValues: FormValues) {
    try {
      await this.sarcApiClient.incidents.addIncidents(formValues);
      this.router.navigate(AppRoutes.incidents);
    } catch (error) {
      this.handleNetworkErrorUseCase.invoke(error);
    }
  }
}

export interface FormValues {
  id: string;
  region: string;
  fio: string;
  statusId: string;
  date: string;
}
