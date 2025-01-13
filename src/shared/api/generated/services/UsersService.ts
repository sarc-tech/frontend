/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
  /**
   * получение пользователя
   * Returns a user
   * @returns User successful operation
   * @throws ApiError
   */
  public static getUser(): CancelablePromise<User> {
    return __request(OpenAPI, {
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
  public static checkSms(
    phone: string,
    sms: string,
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
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
  public static sendSms(
    phone: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
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
  public static logout(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/logout',
      errors: {
        400: `Invalid param`,
        404: `check error`,
      },
    });
  }
}
