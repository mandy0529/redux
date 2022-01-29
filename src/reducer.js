import {CLEAR, DECREASE, INCREASE, REMOVE} from './action';
import cartItems from './cart-items';

export const initialState = {
  cart: cartItems,
  amount: 0,
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return {...state, cart: []};

    case DECREASE:
      const minusItem = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return {...item, amount: item.amount - 1};
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {...state, cart: minusItem};

    case INCREASE:
      const plusItem = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {...item, amount: item.amount + 1};
        }
        return item;
      });
      return {...state, cart: plusItem};

    case REMOVE:
      const filteredItem = state.cart.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        return null;
      });

      return {...state, cart: filteredItem};

    default:
      return {...state};
  }
};

export default reducer;
