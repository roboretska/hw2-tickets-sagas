import {createStore} from 'redux';
import ticketsReducer from '../reducers';


const store = createStore(ticketsReducer);

export default store;