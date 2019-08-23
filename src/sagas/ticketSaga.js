import {call, put, takeLatest} from 'redux-saga/effects';
import {getTicketsListActions, getCurtActions} from '../actions'
import * as mock from '../actions/mock'

function* initTickets() {
    const tickets = yield call(mock.ticketsList);
    yield put(getTicketsListActions.success(tickets));
}

function* initCart() {
    const tickets = yield call(mock.cartList);
    yield put(getCurtActions.success(tickets));
}

export default function* watchTickets() {
    yield takeLatest(getTicketsListActions.REQUEST, initTickets);
    yield takeLatest(getCurtActions.REQUEST, initCart);
}