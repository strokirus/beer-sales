import C from './constants';

/**
 * Request to Products Request and store
 */
export const fetchProducts = params => ({
  type: C.FETCH_PRODUCTS_REQUEST,
  params,
});

export default {
  fetchProducts,
}
