import { put } from 'redux-saga/effects';
import * as TransactionActionCreators from '../actions/transactionActionCreators';
import * as API from '../api';

export function* getTransactionsSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getTransactions();
    yield put(TransactionActionCreators.getTransactionsSuccess(data));
  } catch (error) {
    yield put(TransactionActionCreators.getTransactionsError(error));
  }
}

export function* createTransactionSaga(action) {
  try {
    yield API.createTransaction(action.payload.transaction);
  } catch (error) {
    yield put(TransactionActionCreators.getTransactionsError(error));
  }
}
