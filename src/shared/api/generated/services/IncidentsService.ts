/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Incident } from '../models/Incident';
import type { IncidentsResponse } from '../models/IncidentsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IncidentsService {
  /**
   * Обновление существующей заявки
   * Update an existing incidents by Id
   * @param requestBody Update an existent incidents in the system
   * @returns Incident Successful operation
   * @throws ApiError
   */
  public static updateIncidents(
    requestBody: Incident,
  ): CancelablePromise<Incident> {
    return __request(OpenAPI, {
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
  public static addIncidents(
    requestBody: Incident,
  ): CancelablePromise<Incident> {
    return __request(OpenAPI, {
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
  public static getIncidents(): CancelablePromise<IncidentsResponse> {
    return __request(OpenAPI, {
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
  public static getIncidentById(
    incidentId: string,
  ): CancelablePromise<Incident> {
    return __request(OpenAPI, {
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
   * @returns void
   * @throws ApiError
   */
  public static deleteIncident(
    incidentId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
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
