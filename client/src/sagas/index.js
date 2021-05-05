import { takeEvery } from 'redux-saga/effects';
import ACTIONS from '../actions';
import { getTransactionsSaga,createTransactionSaga } from './transactionSagas';

export default function* rootSaga() {
  yield takeEvery(ACTIONS.GET_TRANSACTIONS_REQUEST, getTransactionsSaga);
  yield takeEvery(ACTIONS.CREATE_TRANSACTION_REQUEST, createTransactionSaga);
}
