import { FC, ReactNode } from 'react';

import { Flex, Loader } from '@gravity-ui/uikit';
import { inject } from 'inversify';
import { makeAutoObservable, observable, runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';

import { AuthStore } from 'features/AuthStore';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { sleep } from 'shared/utils/promiseUtils';

class AppInitializerModel {
  @observable
  initialized = false;

  private readonly sarcApiClient: SarcApiClient;
  private readonly authStore: AuthStore;

  constructor(
    @inject(SarcApiClient) sarcApiClient: SarcApiClient,
    @inject(AuthStore) authStore: AuthStore,
  ) {
    this.sarcApiClient = sarcApiClient;
    this.authStore = authStore;
    makeAutoObservable(this);
    this.initialize();
  }

  private async initialize(): Promise<void> {
    this.authStore.initialize();
    if (this.authStore.isLogged) {
      // const response = await this.sarcApiClient.users.getUser();
      // TODO симуляция сетевых запросов при инициализации.
      //  Выпилить, когда заработает бэкенд.
      await sleep(500);
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
