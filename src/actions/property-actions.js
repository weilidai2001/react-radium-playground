import * as types from './action-types';
import propertyApi from '../api/property-api';
import assetApi from '../api/asset-api';
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

export function uploadThumbnailSuccess(url) {
  return {type: types.UPLOAD_THUMBNAIL_SUCCESS, url};
}

export function uploadThumbnail(asset, property) {
  return function (dispatch, getState) {
    return assetApi.uploadAsset(asset)
      .then(url => {
        const updatedProperty = Object.assign({}, property, {thumbnail: url});
        dispatch(saveProperties(updatedProperty));
      })
      .then(() => dispatch(uploadThumbnailSuccess()))
      .catch(error => {
        throw(error);
      })
  };
}