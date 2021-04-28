import "./App.css";
import { TableCards } from "./components/productCards/ProductCards";
import { ProductDetails } from "./components/productDetails/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { standardTheme } from "./themes/CustomTheme";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { NotFound } from "./components/notFound/NotFound";
import { Cart } from "./components/cart/Cart";
import { FirstPage } from "./components/firstPage/FirstPage";

export const App = () => {
  return (
    <ThemeProvider theme={standardTheme}>
      <CssBaseline>
        <Provider store={store}>
          <Router>
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" component={FirstPage}></Route>
              <Route path="/products/:id" component={ProductDetails}></Route>
              <Route path="/products" component={TableCards}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/*" component={NotFound}></Route>
            </Switch>
          </Router>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  );
};
