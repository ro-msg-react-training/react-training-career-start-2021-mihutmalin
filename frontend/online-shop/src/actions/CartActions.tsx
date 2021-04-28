import { Product } from "../model/ProductInterface";

export enum CartActionsEnum {
  PUT_PROD_CART_REQUEST = "PUT_PROD_CART_REQUEST",
  PUT_PROD_CART_SUCCESS = "PUT_PROD_CART_SUCCESS",
  PUT_PROD_CART_ERROR = "PUT_PROD_CART_ERROR",
}

export interface CartActions {
  type: string;
  payload: any;
}

export const putProductCartRequest = (id: number) => {
  return {
    type: "PUT_PROD_CART_REQUEST",
    payload: id,
  };
};

export const putProductCartSuccess = (products: Product) => {
  return {
    type: "PUT_PROD_CART_SUCCESS",
    payload: products,
  };
};

export const putProductCartError = () => {
  return {
    type: "PUT_PROD_CART_ERROR",
  };
};
