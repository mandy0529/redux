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
  if (action.type === 'DECREASE') {
    return {...state, count: state.count - 1};
  }
  if (action.type === 'INCREASE') {
    return {...state, count: state.count + 1};
  }
  if (action.type === 'CLEAR') {
    return {...state, count: 0};
  }
  return state;
};

const initialState = {
  count: 0,
  name: 'minji',
};

const store = createStore(reducer, initialState);

store.dispatch({type: 'DECREASE'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'CLEAR'});

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
