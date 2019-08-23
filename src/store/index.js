import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import ticketsReducer from '../reducers';
import ticketSaga from '../sagas/ticketSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ticketsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(ticketSaga);

export default store;