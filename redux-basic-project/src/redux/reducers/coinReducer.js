import {GET_DATA} from '../constans/action';

const coinInitialState = {
  coin: [],
};

export const coinReducer = (state = coinInitialState, {type, payload}) => {
  switch (type) {
    case GET_DATA:
      return {...state, coin: payload};

    default:
      return state;
  }
};
