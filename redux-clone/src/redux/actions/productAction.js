import {ActionTypes} from '../constans/action';

const {SET_PRODUCT, SELECTED_PRODUCT, REMOVE_PRODUCT} = ActionTypes;

export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
};
