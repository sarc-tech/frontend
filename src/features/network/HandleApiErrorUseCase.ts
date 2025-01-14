import { inject } from 'inversify';

import { ApiError } from 'shared/api/generated';
import { ErrorReporter } from 'shared/error-reporter/ErrorReporter';
import { ToasterService } from 'shared/toaster/ToasterService';

export class HandleNetworkErrorUseCase {
  private readonly toasterService: ToasterService;
  private readonly errorReporter: ErrorReporter;

  constructor(
    @inject(ToasterService) toasterService: ToasterService,
    @inject(ErrorReporter) errorReporter: ErrorReporter,
  ) {
    this.toasterService = toasterService;
    this.errorReporter = errorReporter;
  }

  invoke(error: unknown) {
    if (error instanceof ApiError) {
      this.toasterService.add({
        name: `error-server-response-${error.status}`,
        title: 'Некорректный ответ от сервера',
        content: `HTTP ${error.status} ${error.statusText}`,
        theme: 'danger',
      });
    } else {
      const errorDescription = String(error);
      this.toasterService.add({
        name: `unknown-error:${errorDescription}`,
        title: 'Неизвестная ошибка',
        content: errorDescription,
        theme: 'danger',
      });
      this.errorReporter.report(error);
    }
  }
}
