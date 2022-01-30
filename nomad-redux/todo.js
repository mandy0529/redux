const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const value = action.payload;
      return {
        ...state,
        list: [...state.list, {id: Math.random(), text: value}],
      };

    default:
      break;
  }
  return state;
};

const initialState = {
  list: [],
};

const store = Redux.createStore(todoReducer, initialState);

const paintTodo = () => {
  const {list} = store.getState();
  ul.innerHTML = '';
  list.map((item) => {
    const liDom = document.createElement('li');
    const text = `<div>
    <span>${item.text}<span>
    <button>❌</button>
    </div>`;
    liDom.id = item.id;
    liDom.innerHTML = text;
    ul.appendChild(liDom);
  });
};

store.subscribe(paintTodo);

const handleSubmit = (e) => {
  e.preventDefault();
  const value = input.value;
  store.dispatch({type: 'ADD_TODO', payload: value});
  input.value = '';
};

form.addEventListener('submit', handleSubmit);
