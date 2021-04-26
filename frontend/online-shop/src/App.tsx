import "./App.css";
import { TableCards } from "./components/productsList/TableCards";
import { ProductDetails } from "./components/productDetails/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { standardTheme } from "./themes/StandardTheme";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Provider } from "react-redux";
import { store } from "./store/Store";

export const App = () => {
  return (
    <ThemeProvider theme={standardTheme}>
      <CssBaseline>
        <Provider store={store}>
          <Router>
            <NavBar></NavBar>
            <Switch>
              <Route path="/product/:number" component={ProductDetails}></Route>
              <Route exact path="/">
                <Redirect to="/products" />
              </Route>
              <Route path="/products" component={TableCards}></Route>
            </Switch>
          </Router>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  );
};
