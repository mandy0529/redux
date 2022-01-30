const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (state = 0) => {
  return state;
};
const store = Redux.createStore(reducer);

console.log(store.getState(), 'store');
