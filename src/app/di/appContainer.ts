import { Container } from 'inversify';

import { AuthStore } from 'features/AuthStore';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { ErrorReporter } from 'shared/error-reporter/ErrorReporter';
import { ToasterService } from 'shared/toaster/ToasterService';

export function createAppContainer() {
  const container = new Container({ autoBindInjectable: true });
  container.bind(SarcApiClient).toSelf().inSingletonScope();
  container.bind(ToasterService).toSelf().inSingletonScope();
  container.bind(ErrorReporter).toSelf().inSingletonScope();
  container.bind(AuthStore).toSelf().inSingletonScope();
  return container;
}

export const appContainer = createAppContainer();
