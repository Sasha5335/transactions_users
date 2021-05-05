import axios from 'axios';
import io from 'socket.io-client';
import store from '../store';
import * as transactionActionCreators from '../actions/transactionActionCreators';
import { BASE_URL, SOCKET_EVENTS } from '../const';

const httpClient = axios.create({
  baseURL: `http://${BASE_URL}`,
});

const socket = io(`ws://${BASE_URL}`, { transport: ['websocket'] });

socket.on(SOCKET_EVENTS.NEW_TRANSACTION, (msg) => {
  console.log(msg);
  store.dispatch(transactionActionCreators.createTransactionSuccess(msg));
});

socket.on(SOCKET_EVENTS.NEW_MESSAGE_ERROR, (err) => {
  store.dispatch(transactionActionCreators.createTransactionError(err));
});

export const getTransactions = () => httpClient.get('/');

export const createTransaction = (transaction) =>
  socket.emit(SOCKET_EVENTS.NEW_TRANSACTION, transaction);
