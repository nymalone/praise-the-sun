import { combineReducers } from "redux";

import weatherReducer from './reducers';

const createRootReducer = () =>
  combineReducers({
    weather: weatherReducer
  });

export default createRootReducer;
