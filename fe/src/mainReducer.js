import { combineReducers } from 'redux';
import search from './containers/Search/reducers';
import products from './containers/Products/reducers';
import cart from './containers/Cart/reducers';

const mainReducer = combineReducers({
  search,
  products,
  cart,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;
