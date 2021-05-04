import { useStyle } from "../../styles/navbar/NavBar.style";
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props: any) => {
  const style = useStyle();

  return (
    <div className={style.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={4}>
            <Link to="/home" className={style.link}>
              <Button color="inherit" className={style.buttonHome}>
                home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <div className={style.div}>
              <Link to="/products" className={style.link}>
                <Button color="inherit" className={style.buttonProducts}>
                  products
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={4}>
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
