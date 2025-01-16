import { GeneratedSarcApiClient } from 'shared/api/generated';

export class SarcApiClient extends GeneratedSarcApiClient {
  setAuthToken(authToken: string | null) {
    this.request.config.TOKEN = authToken ?? undefined;
  }
}
