/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Incident } from '../models/Incident';
import type { IncidentsResponse } from '../models/IncidentsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IncidentsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Обновление существующей заявки
   * Update an existing incidents by Id
   * @param requestBody Update an existent incidents in the system
   * @returns Incident Successful operation
   * @throws ApiError
   */
  public updateIncidents(
    requestBody: Incident,
  ): CancelablePromise<Incident> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/incidents',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Ошибочный ID заявки`,
        404: `Заявка не найдена`,
        422: `Validation exception`,
      },
    });
  }
  /**
   * добавление новой заявки
   * Add a new incidents
   * @param requestBody Add a new incidents
   * @returns Incident Successful operation
   * @throws ApiError
   */
  public addIncidents(
    requestBody: Incident,
  ): CancelablePromise<Incident> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/incidents',
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
   * list of incidents
   * @returns IncidentsResponse successful operation
   * @throws ApiError
   */
  public getIncidents(): CancelablePromise<IncidentsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/incidents',
      errors: {
        400: `Invalid value`,
      },
    });
  }
  /**
   * получение заявки по id
   * Returns a single incidents
   * @param incidentId ID of Incidents to return
   * @returns Incident successful operation
   * @throws ApiError
   */
  public getIncidentById(
    incidentId: string,
  ): CancelablePromise<Incident> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/incidents/{incidentId}',
      path: {
        'incidentId': incidentId,
      },
      errors: {
        400: `Invalid ID`,
        404: `Incidents not found`,
      },
    });
  }
  /**
   * Deletes an incidents
   * delete an incidents
   * @param incidentId request id to delete
   * @returns any successful operation
   * @throws ApiError
   */
  public deleteIncident(
    incidentId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/incidents/{incidentId}',
      path: {
        'incidentId': incidentId,
      },
      errors: {
        400: `Invalid value`,
      },
    });
  }
}
