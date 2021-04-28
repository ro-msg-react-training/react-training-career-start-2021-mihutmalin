import { useStyle } from "../../styles/navbar/NavBar";
import {
  AppBar,
  Button,
  Grid,
  GridList,
  GridListTile,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props: any) => {
  const style = useStyle();

  return (
    <div className={style.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={6}>
            <Link to="/products" className={style.link}>
              <Button color="inherit" className={style.buttonHome}>
                home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/cart" className={style.link}>
              <Button color="inherit" className={style.buttonCart}>
                cart
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
