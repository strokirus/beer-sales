import C from './constants';

/**
 * Request to Products Request and store
 */
export const fetchProducts = params => ({
  type: C.FETCH_PRODUCTS_REQUEST,
  params,
});

export const setText = params => ({
  type: C.SET_TEXT,
  params,
});

export const setTextEnter = () => ({
  type: C.SET_TEXT_CONFIRM,
});

export default {
  fetchProducts,
  setText,
  setTextEnter,
}
