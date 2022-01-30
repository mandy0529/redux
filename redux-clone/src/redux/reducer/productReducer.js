import {ActionTypes} from '../constans/action';

const {SET_PRODUCT, SELECTED_PRODUCT, REMOVE_PRODUCT} = ActionTypes;

export const initialState = {
  products: [],
};

const productReducer = (state, {type, payload}) => {
  switch (type) {
    case SET_PRODUCT:
      return {...state};

    case SELECTED_PRODUCT:
      return {...state};

    case REMOVE_PRODUCT:
      return {...state};

    default:
      break;
  }
};

export default productReducer;
