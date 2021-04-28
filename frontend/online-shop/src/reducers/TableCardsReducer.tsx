import {
  TableCardsActions,
  TableCardsActionsEnum,
} from "../actions/TableCardsActions";
import { Product } from "../model/ProductInterface";
import { getAllProducts } from "../services/ProductService";

export interface TableCardsState {
  products: Product[];
  isLoading: boolean;
}

const initialState: TableCardsState = {
  products: [],
  isLoading: false,
};

export const TableCardsReducer = (
  state = initialState,
  action: TableCardsActions
): TableCardsState => {
  switch (action.type) {
    case TableCardsActionsEnum.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TableCardsActionsEnum.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
