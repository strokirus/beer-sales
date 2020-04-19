import C from './constants';

/**
 * Request to Products Request and store
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchProducts = (params) => ({
  type: C.FETCH_PRODUCTS_REQUEST,
  params,
});
