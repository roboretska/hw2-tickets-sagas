import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TicketsList from './components/TicketsList'
import Cart from './components/Cart'


import './App.css'


function App() {
  return (
      <Provider store={store}>
          <div className='app-container'>
              <TicketsList />
              <Cart />
          </div>
      </Provider>
  );
}

export default App;
