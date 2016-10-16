import {combineReducers} from 'redux';
import properties from './property-reducer';

const rootReducer = combineReducers({
    properties
});

export default rootReducer;
