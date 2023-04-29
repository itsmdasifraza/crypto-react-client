import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";


const reducers = combineReducers({
  coins: coinsReducer,
});

export default reducers;