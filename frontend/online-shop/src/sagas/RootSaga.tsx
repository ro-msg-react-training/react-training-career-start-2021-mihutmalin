import { all } from "redux-saga/effects";
import { watchPutProductCartAsync } from "./CartSaga";
import { watchGetAllProductsAsync } from "./TableCardsSaga";

export default function* rootSaga() {
  yield all([watchGetAllProductsAsync(), watchPutProductCartAsync()]);
}
