import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import {createStore} from 'redux';

const reducer = (state, action) => {
  console.log({state, action});
  return state;
};

const initialState = {
  count: 5,
};

const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
