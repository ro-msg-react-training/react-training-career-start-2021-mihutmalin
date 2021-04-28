import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ProductCardsReducer } from "./ProductCardsReducer";

export default combineReducers({
  products: ProductCardsReducer,
  cart: CartReducer,
});
