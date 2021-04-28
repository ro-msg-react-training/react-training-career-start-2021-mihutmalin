import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  TableCardsReducer,
  TableCardsState,
} from "../reducers/TableCardsReducer";
import { watchGetAllProductsAsync } from ".././sagas/TableCardsSaga";
import { Product } from "../interfaces/ProductInterface";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  TableCardsReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGetAllProductsAsync);

console.log("daaaaaaaaaaaaaaaaaaaaa");
console.log(store.getState());

export interface AppState {
  products: TableCardsState;
  cart: Product[];
}
