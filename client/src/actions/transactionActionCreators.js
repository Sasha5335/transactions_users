import ACTIONS from './';

export const createTransactionRequest = (transaction) => ({
  type: ACTIONS.CREATE_TRANSACTION_REQUEST,
  payload: { transaction },
});

export const createTransactionSuccess = (transaction) => ({
  type: ACTIONS.CREATE_TRANSACTION_SUCCESS,
  payload: { transaction },
});

export const createTransactionError = (error) => ({
  type: ACTIONS.CREATE_TRANSACTION_ERROR,
  payload: { error },
});

export const getTransactionsRequest = () => ({
  type: ACTIONS.GET_TRANSACTIONS_REQUEST,
});

export const getTransactionsSuccess = (transactions) => ({
  type: ACTIONS.GET_TRANSACTIONS_SUCCESS,
  payload: { transactions },
});

export const getTransactionsError = (error) => ({
  type: ACTIONS.GET_TRANSACTIONS_ERROR,
  payload: { error },
});
