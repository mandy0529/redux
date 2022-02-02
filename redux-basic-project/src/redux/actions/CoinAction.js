import {GET_DATA} from '../constans/action';

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
