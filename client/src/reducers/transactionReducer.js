import produce from 'immer';
import ACTIONS from '../actions';

const initialState = {
  isFetching: false,
  transactions: [],
  error: null,
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CREATE_TRANSACTION_SUCCESS: {
      const {
        payload: { transaction },
      } = action;
      return produce(state, (draft) => {
        draft.isFetching = false;
        draft.transactions.push(transaction);
      });
    }

    case ACTIONS.CREATE_TRANSACTION_ERROR: {
      const {
        payload: { error },
      } = action;
      return produce(state, (draftState) => {
        draftState.error = error;
        draftState.isFetching = false;
      });
    }
    //
    //
    //
    case ACTIONS.GET_TRANSACTIONS_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetching = true;
      });
    }

    case ACTIONS.GET_TRANSACTIONS_SUCCESS: {
      const {
        payload: { transactions },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.transactions.push(...transactions);
      });
    }

    case ACTIONS.GET_TRANSACTIONS_ERROR: {
      const {
        payload: { error },
      } = action;
      return produce(state, (draftState) => {
        draftState.error = error;
        draftState.isFetching = false;
      });
    }

    default: {
      return state;
    }
  }
}
