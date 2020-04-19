import { combineReducers } from 'redux';
import search from './pages/Search/reducers';

const mainReducer = combineReducers({
  search,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;
