import {
  ProductCardsActions,
  ProductCardsActionsEnum,
} from "../actions/ProductCardsActions";
import { Product } from "../model/Product";

export interface ProductCardsState {
  products: Product[];
  isLoading: boolean;
}

const initialState: ProductCardsState = {
  products: [],
  isLoading: false,
};

export const ProductCardsReducer = (
  state = initialState,
  action: ProductCardsActions
): ProductCardsState => {
  switch (action.type) {
    case ProductCardsActionsEnum.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProductCardsActionsEnum.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
