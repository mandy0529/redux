import {combineReducers} from 'redux';
import {coinReducer} from './coinReducer';

const reducers = combineReducers({
  data: coinReducer,
});

export default reducers;
