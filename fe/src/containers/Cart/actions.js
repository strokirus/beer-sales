import C from './constants';

/**
 * Request to Cart Request and store
 */
export const addToCart = (params) => ({
  type: C.ADD_CART_REQUEST,
  params,
});

export const removeToCart = (params) => ({
  type: C.REMOVE_CART_REQUEST,
  params,
});

export default {
  addToCart,
  removeToCart,
};
