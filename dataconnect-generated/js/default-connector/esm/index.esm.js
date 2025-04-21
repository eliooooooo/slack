import { queryRef, executeQuery, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'slack-app-d30aa-service',
  location: 'europe-west9'
};

export function getLocationRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLocation');
}

export function getLocation(dc) {
  return executeQuery(getLocationRef(dc));
}

