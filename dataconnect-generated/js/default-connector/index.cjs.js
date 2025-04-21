const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'slack-app-d30aa-service',
  location: 'europe-west9'
};
exports.connectorConfig = connectorConfig;

function getLocationRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLocation');
}
exports.getLocationRef = getLocationRef;

exports.getLocation = function getLocation(dc) {
  return executeQuery(getLocationRef(dc));
};
