/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from '../models/Status';
import type { StatususResponse } from '../models/StatususResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatusesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Обновление существующего статуса
   * Update an existing status by Id
   * @param requestBody Update an existent status in the system
   * @returns Status Successful operation
   * @throws ApiError
   */
  public updateStatus(
    requestBody: Status,
  ): CancelablePromise<Status> {
    return this.httpRequest.request({
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
  public addStatus(
    requestBody: Status,
  ): CancelablePromise<Status> {
    return this.httpRequest.request({
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
  public getStatuses(): CancelablePromise<StatususResponse> {
    return this.httpRequest.request({
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
  public getStatusById(
    statusId: string,
  ): CancelablePromise<Status> {
    return this.httpRequest.request({
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
  public deleteStatus(
    statusId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
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
