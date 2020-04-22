import {
  select,
  put,
  takeLatest,
} from 'redux-saga/effects';

import C from './constants';
import {
  formatCash,
} from '../../utils';

/**
 * Trigged when Request is demmanded
*/
function* addCart(data) {
  try {
    const {
      params,
    } = data;

    const {
      items,
    } = yield select((state) => state.cart);

    const filtered = items.findIndex(i => i.id === params.id);

    if (filtered < 0) {
      items.push({
        ...params,
        qtd: 1,
        total: formatCash(params.price),
      });
    } else if (items[filtered].qtd < params.stock) {
      items[filtered].qtd += 1;
      items[filtered].total = formatCash(items[filtered].qtd * items[filtered].price);
    } else {
      return;
    }

    const total = items.reduce((sum, { qtd, price }) => (
      sum + (qtd * price)
    ), 0);

    yield put({
      type: C.UPDATE_CART,
      data: {
        items,
        total,
        formatTotal: formatCash(total),
      },
    });
  } catch (error) {
    yield put({
      type: C.UPDATE_CART_FAILURE,
      error,
    });
  }
}

function* removeCart(data) {
  try {
    const {
      params,
    } = data;

    let {
      items,
    } = yield select((state) => state.cart);

    const indexItem = items.findIndex(i => i.id === params.id);

    if (items[indexItem].qtd > 1) {
      items[indexItem].qtd -= 1;
      items[indexItem].total = formatCash(items[indexItem].qtd * items[indexItem].price);
    } else {
      items.splice(indexItem, 1);
    }

    const total = items.reduce((sum, { qtd, price }) => (
      sum + (qtd * price)
    ), 0);

    yield put({
      type: C.UPDATE_CART,
      data: {
        items,
        total,
        formatTotal: formatCash(total),
      },
    });
  } catch (error) {
    yield put({
      type: C.UPDATE_CART_FAILURE,
      error,
    });
  }
}

function* getCartData() {
  yield takeLatest(C.ADD_CART_REQUEST, addCart);
  yield takeLatest(C.REMOVE_CART_REQUEST, removeCart);
}

export default getCartData;
