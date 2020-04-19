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
import { formatCash } from '../../utils';

/**
 * Trigged when Request is demmanded
*/
function* fetchProducts(data) {
  let append = false;

  if (data.params) {
    append = data.params.append;
  }

  try {
    const response = yield call(requestCall, data.params);

    console.log(response);

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

function* getSearchData() {
  yield takeLatest(C.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default getSearchData;
