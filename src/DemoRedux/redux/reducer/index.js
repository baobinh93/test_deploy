import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";
import randomNumber from "./randomNumber";
export let rootReducer = combineReducers({
  numberReducer,
  randomNumber,
});
