import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function propertyReducer(state = initialState.properties, action) {
  switch (action.type) {
    case types.LOAD_PROPERTIES_SUCCESS:
      return action.properties;

    case types.CREATE_PROPERTY_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.property)
      ];

    case types.UPDATE_PROPERTY_SUCCESS:
      return [
        ...state.filter(property => property.id !== action.property.id),
        Object.assign({}, action.property)
      ];

    default:
      return state;
  }
}
