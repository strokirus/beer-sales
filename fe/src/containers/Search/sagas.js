import {
  select,
  put,
  takeLatest,
} from 'redux-saga/effects';

import C from './constants';
import P from '../Products/constants';

import history from '../../helpers/history';

/**
 * Trigged when Request is demmanded
*/
function* setText() {
  try {
    const { text } = yield select((state) => state.search);

    yield put({
      type: P.FETCH_PRODUCTS_REQUEST,
      params: { name: text },
    });

    history.replace(`/${text}`);
  } catch (error) {
    yield put({
      type: P.FETCH_PRODUCTS_FAILURE,
      error,
    });
  }
}

function* getSearchData() {
  yield takeLatest(C.SET_TEXT_CONFIRM, setText);
}

export default getSearchData;
