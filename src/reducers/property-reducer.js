import * as types from '../actions/action-types';
import initialState from './initial-state';

const sortRule = (a, b)=> a.order - b.order || b.id - a.id;

export default function propertyReducer(state = initialState.properties, action) {
  switch (action.type) {
    case types.LOAD_PROPERTIES_SUCCESS:
      return action.properties.sort(sortRule);

    case types.CREATE_PROPERTY_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.property)
      ].sort(sortRule);

    case types.UPDATE_PROPERTY_SUCCESS:
      return [
        ...state.filter(property => property.id !== action.property.id),
        Object.assign({}, action.property)
      ].sort(sortRule);

    case types.UPLOAD_ASSET_SUCCESS:
      return state;

    default:
      return state;
  }
}
