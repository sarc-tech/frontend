/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from '../models/Status';
import type { StatususResponse } from '../models/StatususResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusesService {
  /**
   * Обновление существующего статуса
   * Update an existing status by Id
   * @param requestBody Update an existent status in the system
   * @returns Status Successful operation
   * @throws ApiError
   */
  public static updateStatus(
    requestBody: Status,
  ): CancelablePromise<Status> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/statuses',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Ошибочный ID статуса`,
        404: `Статус не найден`,
        422: `Validation exception`,
      },
    });
  }
  /**
   * добавление новой заявки
   * Add a new status
   * @param requestBody Add a new status
   * @returns Status Successful operation
   * @throws ApiError
   */
  public static addStatus(
    requestBody: Status,
  ): CancelablePromise<Status> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/statuses',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid input`,
        422: `Validation exception`,
      },
    });
  }
  /**
   * получение списка заявок
   * list of statuses
   * @returns StatususResponse successful operation
   * @throws ApiError
   */
  public static getStatuses(): CancelablePromise<StatususResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/statuses',
      errors: {
        400: `Invalid value`,
      },
    });
  }
  /**
   * получение заявки по id
   * Returns a single incidents
   * @param statusId ID of Status to return
   * @returns Status successful operation
   * @throws ApiError
   */
  public static getStatusById(
    statusId: string,
  ): CancelablePromise<Status> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/statuses/{statusId}',
      path: {
        'statusId': statusId,
      },
      errors: {
        400: `Invalid ID`,
        404: `Incidents not found`,
      },
    });
  }
  /**
   * Deletes an status
   * delete an status
   * @param statusId request id to delete
   * @returns any successful operation
   * @throws ApiError
   */
  public static deleteStatus(
    statusId: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/statuses/{statusId}',
      path: {
        'statusId': statusId,
      },
      errors: {
        400: `Invalid value`,
      },
    });
  }
}
