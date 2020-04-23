import {
  call,
  select,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  requestCall,
} from './api';

import C from './constants';

import {
  formatCash,
} from '../../utils';

/**
 * Trigged when Request is demmanded
*/
function* fetchProducts(data) {
  let append = false;
  const term = data.params?.name;

  if (data.params) {
    append = data.params.append;
  }

  try {
    const response = yield call(requestCall, data.params);

    const { items } = yield select((state) => state.search);

    if (response) {
      let itemsUpdate = response.items;

      itemsUpdate = itemsUpdate.map((i) => ({
        ...i,
        formatPrice: formatCash(i.price),
      }));

      if (append) {
        items.push(...itemsUpdate);
        itemsUpdate = items;
      }

      yield put({
        type: C.FETCH_PRODUCTS_SUCCESS,
        data: itemsUpdate,
        term,
      });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({
      type: C.FETCH_PRODUCTS_FAILURE,
      error,
    });
  }
}

function* getProductsData() {
  yield takeLatest(C.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default getProductsData;
