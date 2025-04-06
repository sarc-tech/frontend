/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Team } from '../models/Team';
import type { TeamsResponse } from '../models/TeamsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Обновление существующего отряда
   * Update an existing team by Id
   * @param requestBody Update an existent team in the system
   * @returns Team Successful operation
   * @throws ApiError
   */
  public updateTeam(
    requestBody: Team,
  ): CancelablePromise<Team> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/teams',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Ошибочный ID отряда`,
        404: `Отряд не найден`,
        422: `Validation exception`,
      },
    });
  }
  /**
   * добавление нового отряда
   * Add a new team
   * @param requestBody Add a new team
   * @returns Team Successful operation
   * @throws ApiError
   */
  public addTeam(
    requestBody: Team,
  ): CancelablePromise<Team> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/teams',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid input`,
        422: `Validation exception`,
      },
    });
  }
  /**
   * получение списка отрядов
   * list of teams
   * @returns TeamsResponse successful operation
   * @throws ApiError
   */
  public getTeams(): CancelablePromise<TeamsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/teams',
      errors: {
        400: `Invalid value`,
      },
    });
  }
  /**
   * получение отряда по id
   * Returns a single tems
   * @param teamId ID of Team to return
   * @returns Team successful operation
   * @throws ApiError
   */
  public getTemsById(
    teamId: string,
  ): CancelablePromise<Team> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/teams/{teamId}',
      path: {
        'teamId': teamId,
      },
      errors: {
        400: `Invalid ID`,
        404: `Team not found`,
      },
    });
  }
  /**
   * Deletes an team
   * delete an team
   * @param teamId request id to delete
   * @returns any successful operation
   * @throws ApiError
   */
  public deleteTeam(
    teamId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/teams/{teamId}',
      path: {
        'teamId': teamId,
      },
      errors: {
        400: `Invalid value`,
      },
    });
  }
}
