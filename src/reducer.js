import {
  CLEAR,
  CONTROL_AMOUNT,
  DECREASE,
  GET_TOTAL,
  INCREASE,
  REMOVE,
} from './action';
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

    // case DECREASE:
    //   const minusItem = state.cart
    //     .map((item) => {
    //       if (item.id === action.payload) {
    //         return {...item, amount: item.amount - 1};
    //       }
    //       return item;
    //     })
    //     .filter((item) => item.amount !== 0);
    //   return {...state, cart: minusItem};

    // case INCREASE:
    //   const plusItem = state.cart.map((item) => {
    //     if (item.id === action.payload) {
    //       return {...item, amount: item.amount + 1};
    //     }
    //     return item;
    //   });
    //   return {...state, cart: plusItem};

    case CONTROL_AMOUNT:
      const {id, control} = action.payload;
      const controlAmountItem = state.cart.map((item) => {
        if (item.id === id) {
          if (control === 'inc') {
            return {...item, amount: item.amount + 1};
          }
          if (control === 'dec') {
            return {...item, amount: item.amount - 1};
          }
        }
        return item;
      });
      const removedItem = controlAmountItem.filter((item) => item.amount !== 0);

      return {
        ...state,
        cart: control === 'inc' ? controlAmountItem : removedItem,
      };

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
          total.total += amount * price;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total: totalItem.total.toFixed(2),
        amount: totalItem.amount,
      };

    default:
      return {...state};
  }
};

export default reducer;
