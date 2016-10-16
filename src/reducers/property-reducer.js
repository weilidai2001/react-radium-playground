import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function propertyReducer(state = initialState.properties, action) {
  switch (action.type) {
    case types.LOAD_PROPERTIES_SUCCESS:
      return action.properties;

    default:
      return state;
  }
}
