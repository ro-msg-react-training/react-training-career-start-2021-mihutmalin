import { takeEvery, put, call } from "redux-saga/effects";
import {
  getAllProductsError,
  getAllProductsRequest,
  getAllProductsSuccess,
  TableCardsActions,
  TableCardsActionsEnum,
} from "../actions/TableCardsActions";
import { Product } from "../model/ProductInterface";
import { getAllProducts } from "../services/ProductService";

function* getAllProductsAsync() {
  try {
    const result: Product[] = yield call(() => getAllProducts());
    yield put(getAllProductsSuccess(result));
  } catch (err) {
    yield put(getAllProductsError());
  }
}

export function* watchGetAllProductsAsync() {
  yield takeEvery(
    TableCardsActionsEnum.GET_ALL_PRODUCTS_REQUEST,
    getAllProductsAsync
  );
}
