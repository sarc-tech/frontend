/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UsersResponse } from '../models/UsersResponse';
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
   * Обновление текущего пользователя
   * Update a user
   * @param requestBody Update an existent user in the system
   * @returns User successful operation
   * @throws ApiError
   */
  public updateUser(
    requestBody: User,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid user`,
        404: `user not found`,
      },
    });
  }
  /**
   * получение пользователя по id
   * Returns a user
   * @param userId ID of User to return
   * @returns User successful operation
   * @throws ApiError
   */
  public getUserById(
    userId: string,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/{userId}',
      path: {
        'userId': userId,
      },
      errors: {
        400: `Invalid user`,
        404: `user not found`,
      },
    });
  }
  /**
   * получение списка пользователей
   * Returns a users
   * @returns UsersResponse successful operation
   * @throws ApiError
   */
  public getUsers(): CancelablePromise<UsersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users',
      errors: {
        400: `Invalid user`,
        404: `user not found`,
      },
    });
  }
  /**
   * Получение токена
   * Returns a user
   * @param token token of yandex
   * @returns User successful operation
   * @throws ApiError
   */
  public checkUser(
    token: string,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/checkuser/{token}',
      path: {
        'token': token,
      },
      errors: {
        400: `Invalid user`,
        404: `user not found`,
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
      method: 'POST',
      url: '/logout',
      errors: {
        400: `Invalid param`,
        404: `check error`,
      },
    });
  }
}
