/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Incident } from './Incident';
import type { Status } from './Status';
export type IncidentsResponse = {
  trackingId: string;
  status: string;
  data: Array<Incident>;
  statuses?: Array<Status>;
};

