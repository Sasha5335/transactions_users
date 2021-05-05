import { useEffect, useLayoutEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TransactionActionCreators from './actions/transactionActionCreators';

function App(props) {
  const { transactions, isFetching, error } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();
  const {
    getTransactionsRequest,
    createTransactionRequest,
  } = bindActionCreators(TransactionActionCreators, dispatch);

  useEffect(() => {
    getTransactionsRequest();
  }, []);

  return (
    <div>
      <Formik
        onSubmit={(values, formikBag) => {
          createTransactionRequest(values);
          formikBag.setFieldValue('text', '');
        }}
        initialValues={{
          name: '',
          text: '',
        }}
      >
        <Form>
          <Field name="name" placeholder="name" />
          <Field name="text" placeholder="text" />
          <button type="submit">Send transaction</button>
        </Form>
      </Formik>
      <ul>
        {isFetching && <li>Messages is loading...</li>}
        {transactions.map((msg) => (
          <li key={msg._id}>{JSON.stringify(msg, null, 8)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
