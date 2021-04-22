import { useStyle } from "../../styles/productDetails/ProductDetailsStyle";
import { Grid, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import React from "react";

export const ProductDetails = (props: any) => {
  const style = useStyle();

  const { number } = props.match.params;
  const { product } = props.location.state;

  return (
    <Grid container className={style.root}>
      <Grid className={style.info} item xs={6}>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.name}</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.category}</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>$ {product.price}</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.weight} kg</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.supplier}</div>
        </Grid>
        <Grid className={style.grid} container>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <div className={style.div}>Add to cart</div>
          </Grid>
          <Grid item xs={3}>
            <div className={style.div}>
              <IconButton
                className={style.button}
                aria-label="chart"
                component="span"
              >
                <ShoppingCart className={style.buttonIcon} />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid className={style.img} item xs={6}>
        <img src={product.imgUrl} alt={product.name} />
      </Grid>
    </Grid>
  );
};
