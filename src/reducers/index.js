import {combineReducers} from 'redux';
import {getTicketsListActions, getCurtActions} from '../actions'


const ticketsList = (store = [], action) => {
    switch (action.type) {
        case getTicketsListActions.SUCCESS: {
            console.log('Tickets reducer');
            return [...action.payload]
        }
        default: return store
    }
};

const cartList = (store = [], action) => {
    switch (action.type) {
        case getCurtActions.SUCCESS: {
            return [...action.payload]
        }
        default: return store
    }
};

const selectedTicket = (store = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART_LIST': {
            return [...action.payload]
        }
        default: return store
    }
};

export default combineReducers({ticketsList, cartList, selectedTicket});