import { CartActions, CartActionsEnum } from "../actions/CartActions";
import { Product } from "../model/Product";

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export const CartReducer = (
  state = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case CartActionsEnum.PUT_PROD_CART_REQUEST:
      return {
        ...state,
      };
    case CartActionsEnum.PUT_PROD_CART_SUCCESS:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    default:
      return state;
  }
};
