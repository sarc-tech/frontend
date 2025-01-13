import { ToastProps, ToasterPublicMethods } from '@gravity-ui/uikit';

export class ToasterService implements ToasterPublicMethods {
  private delegate?: ToasterPublicMethods;

  setDelegate(delegate: ToasterPublicMethods) {
    this.delegate = delegate;
  }

  add(toast: ToastProps): void {
    this.delegate?.add(toast);
  }

  has(toastName: ToastProps['name']): boolean {
    return this.delegate?.has(toastName) ?? false;
  }

  remove(toastName: ToastProps['name']): void {
    this.delegate?.remove(toastName);
  }

  removeAll(): void {
    this.delegate?.removeAll();
  }

  update(toastName: ToastProps['name'], override: Partial<ToastProps>): void {
    this.delegate?.update(toastName, override);
  }
}

export const toasterService = new ToasterService();
