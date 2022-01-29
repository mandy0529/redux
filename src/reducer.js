import {CLEAR, DECREASE, GET_TOTAL, INCREASE, REMOVE} from './action';
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

    case GET_TOTAL:
      const totalItem = state.cart.reduce(
        (total, item) => {
          const {price, amount} = item;
          total.amount += amount;
          total.price += amount * price;
          return total;
        },
        {
          price: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total: totalItem.price.toFixed(2),
        amount: totalItem.amount,
      };

    default:
      return {...state};
  }
};

export default reducer;
