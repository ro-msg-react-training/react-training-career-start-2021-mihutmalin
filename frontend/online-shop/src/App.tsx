import './App.css';
import {TableCards} from './components/productsList/TableCards';
import {ProductDetails} from './components/productDetails/ProductDetails';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { standardTheme } from './themes/StandardTheme';

import img1 from './resources/1.jpg';
import img2 from './resources/2.jpg';
import img3 from './resources/3.jpg';
import img4 from './resources/4.jpg';
import img5 from './resources/5.jpg';
import React from 'react';
import { CssBaseline } from '@material-ui/core';

//const prop: Products = {

  var products= [ 
    {
      id: BigInt(1),
      name:"ProductName1",
      price: 1,
      weight: 1,
      category:"Category1",
      supplier:"Supplier1",
      imgUrl: img1
    },
    {
      id: BigInt(2),
      name:"ProductName2",
      price: 2,
      weight: 2,
      category:"Category2",
      supplier:"Supplier2",
      imgUrl: img2
    },
    {
      id: BigInt(3),
      name:"ProductName3",
      price: 3,
      weight: 3,
      category:"Category3",
      supplier:"Supplier3",
      imgUrl: img3
    },
    {
      id: BigInt(4),
      name:"ProductName4",
      price: 4,
      weight: 4,
      category:"Category4",
      supplier:"Supplier4",
      imgUrl: img4
    },
    {
      id: BigInt(5),
      name:"ProductName5",
      price: 5,
      weight: 5,
      category:"Category5",
      supplier:"Supplier5",
      imgUrl: img5
    },
]
//}

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
}