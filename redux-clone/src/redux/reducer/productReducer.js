import {ActionTypes} from '../constans/action';

const {SET_PRODUCT, SELECTED_PRODUCT, REMOVE_PRODUCT} = ActionTypes;

export const initialState = {
  items: [],
};

export const singleState = {
  singleItem: {},
};

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCT:
      return {...state, items: payload};

    default:
      return state;
  }
};

export const singleProductReducer = (state = singleState, {type, payload}) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return {...state, singleItem: payload};

    case REMOVE_PRODUCT:
      return {...state, singleItem: {}};

    default:
      return state;
  }
};
