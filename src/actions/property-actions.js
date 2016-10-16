import propertyApi from '../api/property-api';

export function loadProperties() {
  return function(dispatch) {
    return propertyApi.getAllProperties().then(properties => {
      dispatch(properties);
    }).catch(error => {
      throw(error);
    });
  };
}