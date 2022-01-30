import {ActionTypes} from '../constans/action';

const {SET_PRODUCT, SELECTED_PRODUCT, REMOVE_PRODUCT} = ActionTypes;

export const initialState = {
  items: [],
};

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
