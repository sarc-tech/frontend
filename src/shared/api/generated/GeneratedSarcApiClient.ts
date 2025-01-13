/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { IncidentsService } from './services/IncidentsService';
import { StatusesService } from './services/StatusesService';
import { UsersService } from './services/UsersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class GeneratedSarcApiClient {
  public readonly incidents: IncidentsService;
  public readonly statuses: StatusesService;
  public readonly users: UsersService;
  public readonly request: BaseHttpRequest;
  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://bbasntee4s9pbtmrrvb1.containers.yandexcloud.net',
      VERSION: config?.VERSION ?? '0.0.9',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.incidents = new IncidentsService(this.request);
    this.statuses = new StatusesService(this.request);
    this.users = new UsersService(this.request);
  }
}

