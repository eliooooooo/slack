import { ConnectorConfig, DataConnect, QueryRef, QueryPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Favorite_Key {
  id: UUIDString;
  __typename?: 'Favorite_Key';
}

export interface GetLocationData {
  location?: {
    id: UUIDString;
    latitude: number;
    longitude: number;
    name: string;
  } & Location_Key;
}

export interface Location_Key {
  id: UUIDString;
  __typename?: 'Location_Key';
}

export interface Rating_Key {
  id: UUIDString;
  __typename?: 'Rating_Key';
}

export interface Report_Key {
  id: UUIDString;
  __typename?: 'Report_Key';
}

export interface User_Key {
  uid: string;
  __typename?: 'User_Key';
}

/* Allow users to create refs without passing in DataConnect */
export function getLocationRef(): QueryRef<GetLocationData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function getLocationRef(dc: DataConnect): QueryRef<GetLocationData, undefined>;

export function getLocation(): QueryPromise<GetLocationData, undefined>;
export function getLocation(dc: DataConnect): QueryPromise<GetLocationData, undefined>;

