/**
 * IMPORTS
 */
import {combineReducers} from 'redux';
import {filterReducer as filters} from './filterreducer.js';


/**
 * CODE
 */
const reducers = combineReducers({
    filters
});


/**
 * EXPORTS
 */
export {reducers};
