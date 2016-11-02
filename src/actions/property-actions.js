import * as types from './action-types';
import propertyApi from '../api/property-api';
import {beginAjaxCall, ajaxCallError} from './ajax-status-actions';

export function loadPropertiesSuccess(properties) {
  return {type: types.LOAD_PROPERTIES_SUCCESS, properties};
}

export function createPropertySuccess(property) {
  return {type: types.CREATE_PROPERTY_SUCCESS, property};
}

export function updatePropertySuccess(property) {
  return {type: types.UPDATE_PROPERTY_SUCCESS, property};
}

export function loadProperties() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return propertyApi
      .getAllProperties()
      .then(properties => dispatch(loadPropertiesSuccess(properties)))
      .catch(error => {
        throw(error)
      });
  }
}

export function saveProperties(property) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return propertyApi.saveProperty(property).then(property => {
      property.id ? dispatch(updatePropertySuccess(property)) :
        dispatch(createPropertySuccess(property));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function uploadSuccess(url) {
  return {type: types.UPLOAD_ASSET_SUCCESS, url};
}

export function uploadAsset(asset) {
  return function (dispatch, getState) {
    return propertyApi.uploadAsset(asset).then(url => {
      dispatch(uploadSuccess(url))
    }).catch(error => {
     throw(error);
    })
  };
}