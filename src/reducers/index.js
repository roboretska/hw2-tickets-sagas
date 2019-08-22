import {combineReducers} from 'redux'

const ticketsList = (store = [], action) => {
    switch (action.type) {
        case 'ADD_TO_TICKETS_LIST': {
            return [...action.payload]
        }
        default: return store
    }
};

const cartList = (store = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART_LIST': {
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