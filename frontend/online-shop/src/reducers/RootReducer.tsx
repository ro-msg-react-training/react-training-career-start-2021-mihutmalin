import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { TableCardsReducer } from "./TableCardsReducer";

export default combineReducers({
  products: TableCardsReducer,
  cart: CartReducer,
});
