import { useStyle } from "../../styles/productDetails/ProductDetailsStyle";
import { Button, Grid, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../services/ProductService";
import { Product } from "../../interfaces/ProductInterface";

interface ProductDetailsProps {
  product: Product;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ProductDetails = (props: any) => {
  const style = useStyle();

  const { number } = props.match.params;
  const product: Product = props.location.state.product;
  console.log(product);
  console.log(product.name);

  const onButtonDelete = () => (event: React.MouseEvent<unknown>) => {
    deleteProduct(number);
  };

  const onButtonUpdate = () => (event: React.MouseEvent<unknown>) => {
    deleteProduct(number);
  };

  return (
    <Grid container className={style.root}>
      <Grid className={style.info} item xs={6}>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.name}</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.productCategory.name}</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>$ {product.price}</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.weight} kg</div>
        </Grid>
        <Grid className={style.grid} item xs={12}>
          <div className={style.div}>{product.supplier.name}</div>
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
      <Grid item xs={6} className={style.imgContainer}>
        <Grid>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={style.img}
          />
        </Grid>
        <Grid container>
          <Grid item xs={6} className={style.grid}>
            <div className={style.div}>
              <Link to="/products" className={style.link}>
                <Button
                  className={style.updateButton}
                  onClick={onButtonUpdate()}
                >
                  UPDATE
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} className={style.grid}>
            <div className={style.div}>
              <Link to="/products" className={style.link}>
                <Button
                  className={style.deleteButton}
                  onClick={onButtonDelete()}
                >
                  Delete
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
