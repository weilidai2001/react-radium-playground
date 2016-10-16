import * as types from './action-types';
import propertyApi from '../api/property-api';

export function loadPropertiesSuccess(properties) {
  return { type: types.LOAD_PROPERTIES_SUCCESS, properties};
}

export function loadProperties() {
  return function(dispatch) {
    return propertyApi.getAllProperties().then(properties => {
      dispatch(loadPropertiesSuccess(properties));
    }).catch(error => {
      throw(error);
    });
  };
}