import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
// redux stuff
import {createStore} from 'redux';
import reducer, {initialState} from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer, initialState);

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
