import { makeAutoObservable, observable, runInAction } from 'mobx';

import { toasterService } from 'features/toaster/ToasterService';
import { apiClient } from 'shared/api/ApiClient';
import { ApiError, Status } from 'shared/api/generated';
import { errorTracker } from 'shared/error-reporter/ErrorReporter';

export class StatusesPageModel {
  @observable
  statuses: Status[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadStatuses();
  }

  private async loadStatuses() {
    try {
      const statusesResponse = await apiClient.statuses.getStatuses();
      runInAction(() => {
        this.statuses = statusesResponse.data;
      });
    } catch (error) {
      if (error instanceof ApiError) {
        toasterService.add({
          name: `error-server-response-${error.status}`,
          title: 'Некорректный ответ от сервера',
          content: `HTTP ${error.status} ${error.statusText}`,
          theme: 'danger',
        });
      } else {
        const errorDescription = String(error);
        toasterService.add({
          name: `unknown-error:${errorDescription}`,
          title: 'Неизвестная ошибка',
          content: errorDescription,
          theme: 'danger',
        });
        errorTracker.report(error);
      }
    }
  }
}
