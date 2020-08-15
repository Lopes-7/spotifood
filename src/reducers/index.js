/**
 * IMPORTS
 */
import {combineReducers} from 'redux';
import {displayByReducer as display} from './displaybyreducer.js';
import {filterReducer as filters} from './filterreducer.js';
import {searchReducer as search} from './searchreducer.js';


/**
 * CODE
 */
const reducers = combineReducers({
    display,
    filters,
    search
});


/**
 * EXPORTS
 */
export {reducers};
