import { GetLocationData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetLocation(options?: useDataConnectQueryOptions<GetLocationData>): UseDataConnectQueryResult<GetLocationData, undefined>;
export function useGetLocation(dc: DataConnect, options?: useDataConnectQueryOptions<GetLocationData>): UseDataConnectQueryResult<GetLocationData, undefined>;
