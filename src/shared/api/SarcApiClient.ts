import { GeneratedSarcApiClient } from 'shared/api/generated';
import { sleep } from 'shared/utils/promiseUtils';

export class SarcApiClient extends GeneratedSarcApiClient {
  async login(login: string, password: string): Promise<string> {
    await sleep(1000);
    if (login === 'ivan' && password === 'password1') {
      return 'token-example-for-user-ivan';
    }
    throw new Error('Password wrong');
  }

  setAuthToken(authToken: string | null) {
    this.request.config.TOKEN = authToken ?? undefined;
  }
}
