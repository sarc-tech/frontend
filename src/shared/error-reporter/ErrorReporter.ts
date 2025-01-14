/**
 * Класс отвечающий за репорт ошибок в соответствующие сервисы (например в Sentry или подобные).
 */
export class ErrorReporter {
  report(error: unknown) {
    // eslint-disable-next-line no-console
    console.error('Error tracked by ErrorTracker', error);
  }
}
