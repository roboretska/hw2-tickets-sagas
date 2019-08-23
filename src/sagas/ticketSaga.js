import {call, put, takeLatest} from 'redux-saga/effects';
import {getTicketsListActions, getCurtActions} from '../actions'
import * as API from '../API'

function* initTickets() {
    const tickets = yield call(API.getTicketsList);
    console.log(tickets);
    yield put(getTicketsListActions.success(tickets));
}

function* initCart() {
    const cart = yield call(API.getCart);
    console.log(cart);
    yield put(getCurtActions.success(cart));
}

export default function* watchTickets() {
    yield takeLatest(getTicketsListActions.REQUEST, initTickets);
    yield takeLatest(getCurtActions.REQUEST, initCart);
}