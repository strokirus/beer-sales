import { all, fork } from 'redux-saga/effects';
import searchSaga from './containers/Search/sagas';
import cartSaga from './containers/Cart/sagas';
import productsSaga from './containers/Products/sagas';

const sagas = [
  searchSaga,
  cartSaga,
  productsSaga,
];

/**
 * Describe all sagas used in project
 */
export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}
