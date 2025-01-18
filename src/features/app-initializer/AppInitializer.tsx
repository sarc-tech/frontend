import { FC, ReactNode } from 'react';

import { Flex, Loader } from '@gravity-ui/uikit';
import { inject } from 'inversify';
import { makeAutoObservable, observable, runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';

import { AuthStore } from 'features/AuthStore';
import { HandleNetworkErrorUseCase } from 'features/network/HandleApiErrorUseCase';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { ApiError } from 'shared/api/generated';
import { useInject } from 'shared/utils/hooks/useInject';

class AppInitializerModel {
  @observable
  initialized = false;

  private readonly sarcApiClient: SarcApiClient;
  private readonly authStore: AuthStore;
  private readonly handleNetworkErrorUseCase: HandleNetworkErrorUseCase;

  constructor(
    @inject(SarcApiClient) sarcApiClient: SarcApiClient,
    @inject(AuthStore) authStore: AuthStore,
    @inject(HandleNetworkErrorUseCase) handleNetworkErrorUseCase: HandleNetworkErrorUseCase,
  ) {
    this.sarcApiClient = sarcApiClient;
    this.authStore = authStore;
    this.handleNetworkErrorUseCase = handleNetworkErrorUseCase;
    makeAutoObservable(this);
    this.initialize();
  }

  private async initialize(): Promise<void> {
    this.authStore.initialize();
    if (this.authStore.isLogged) {
      try {
        const loggedUser = await this.sarcApiClient.users.getUser();
        this.authStore.setLoggedUser(loggedUser);
      } catch (error) {
        if (error instanceof ApiError) {
          if (error.status === 401) {
            this.authStore.clearToken();
          }
        } else {
          this.handleNetworkErrorUseCase.invoke(error);
        }
      }
    }
    runInAction(() => {
      this.initialized = true;
    });
  }
}

export const AppInitializer: FC<{ children: ReactNode }> = observer((props) => {
  const initializerModel = useInject(AppInitializerModel);
  if (!initializerModel.initialized) {
    return (
      <Flex centerContent width="100%" minHeight="100%">
        <Loader size="l" />
      </Flex>
    );
  } else {
    return props.children;
  }
});
