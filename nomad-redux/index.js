const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return state + 1;

    case 'MINUS':
      return state - 1;

    default:
      break;
  }
};
const store = Redux.createStore(reducer);

const handleChange = () => {
  number.textContent = store.getState();
};

const handlePlus = () => {
  store.dispatch({type: 'PLUS'});
};

const handleMinus = () => {
  store.dispatch({type: 'MINUS'});
};

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
store.subscribe(handleChange);

// --------------------------------------------------------------------
