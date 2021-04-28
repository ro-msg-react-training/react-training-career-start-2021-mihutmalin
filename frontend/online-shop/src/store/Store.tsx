import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { ProductCardsState } from "../reducers/ProductCardsReducer";
import RootReducer from "../reducers/RootReducer";
import { CartState } from "../reducers/CartReducer";
import RootSaga from "../sagas/RootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(RootSaga);

export interface AppState {
  products: ProductCardsState;
  cart: CartState;
}
