import { takeEvery, put, call } from "redux-saga/effects";
import {
  CartActions,
  CartActionsEnum,
  putProductCartError,
  putProductCartSuccess,
} from "../actions/CartActions";
import { Product } from "../model/Product";
import { getProductById } from "../services/ProductService";

function* putProductCartAsync(action: CartActions) {
  try {
    const result: Product = yield call(() => {
      const aux = getProductById(action.payload).then((response) => {
        return response.data;
      });
      return aux;
    });
    yield put(putProductCartSuccess(result));
  } catch (err) {
    yield put(putProductCartError());
  }
}

export function* watchPutProductCartAsync() {
  yield takeEvery(CartActionsEnum.PUT_PROD_CART_REQUEST, putProductCartAsync);
}
