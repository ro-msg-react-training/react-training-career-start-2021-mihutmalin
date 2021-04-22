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

export const App = () => {
  return (
    <ThemeProvider theme={standardTheme}>
      <CssBaseline>
        <Router>
          <Switch>
            <Route path="/product/:number" component={ProductDetails}></Route>
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
            <Route path="/products" component={TableCards}></Route>
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};
