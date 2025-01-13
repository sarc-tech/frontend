/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * получение пользователя
   * Returns a user
   * @returns User successful operation
   * @throws ApiError
   */
  public getUser(): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user',
      errors: {
        400: `Invalid user`,
        404: `user not found`,
      },
    });
  }
  /**
   * Получение токена
   * Returns a token
   * @param phone phone of user
   * @param sms sms
   * @returns string successful operation
   * @throws ApiError
   */
  public checkSms(
    phone: string,
    sms: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/checksms',
      headers: {
        'phone': phone,
        'sms': sms,
      },
      errors: {
        400: `Invalid param`,
        404: `check error`,
      },
    });
  }
  /**
   * Отправка СМС
   * Returns a token
   * @param phone phone of user
   * @returns any successful operation
   * @throws ApiError
   */
  public sendSms(
    phone: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sendsms',
      headers: {
        'phone': phone,
      },
      errors: {
        400: `Invalid param`,
        404: `check error`,
      },
    });
  }
  /**
   * Выход из акаунта
   * Удаляет сессию пользователя
   * @returns any successful operation
   * @throws ApiError
   */
  public logout(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/logout',
      errors: {
        400: `Invalid param`,
        404: `check error`,
      },
    });
  }
}
