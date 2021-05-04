import { useStyle } from "../../styles/productDetails/ProductDetails.style";
import { Button, Grid, IconButton, TextField } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  getProductById,
  updateProductById,
} from "../../services/ProductService";
import { Product } from "../../model/Product";
import { putProductCartRequest } from "../../actions/CartActions";
import { useDispatch } from "react-redux";

interface ProductDetailsProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ProductDetails = (props: ProductDetailsProps) => {
  const style = useStyle();

  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    weight: 0,
    productCategory: {
      id: 0,
      name: "",
      description: "",
    },
    supplier: {
      id: 0,
      name: "",
    },
    imageUrl: "",
  });

  const [isOnUpdate, setIsOnUpdate] = useState(false);

  const [newName, setNewName] = useState(product.name);
  const [newPrice, setNewPrice] = useState(product.price);
  const [newWeight, setNewWeight] = useState(product.weight);

  const id = (props as any).match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response.data);
    });
  });

  const onButtonDelete = () => (event: React.MouseEvent<unknown>) => {
    deleteProduct(id);
  };

  const onButtonUpdate = () => (event: React.MouseEvent<unknown>) => {
    setIsOnUpdate(true);
  };

  const onButtonAddToCart = () => (event: React.MouseEvent<unknown>) => {
    dispatch(putProductCartRequest(id));
  };

  const onButtonCancel = () => (event: React.MouseEvent<unknown>) => {
    setIsOnUpdate(false);
  };

  const onButtonSave = () => (event: React.MouseEvent<unknown>) => {
    const newProduct: Product = {
      id: product.id,
      name: newName,
      description: product.description,
      price: newPrice,
      weight: newWeight,
      productCategory: {
        id: product.productCategory.id,
        name: product.productCategory.name,
        description: product.productCategory.description,
      },
      supplier: {
        id: product.supplier.id,
        name: product.supplier.name,
      },
      imageUrl: product.imageUrl,
    };
    updateProductById(id, newProduct);
  };

  return (
    <Grid container className={style.root}>
      <Grid className={style.info} item xs={6}>
        <div className={style.div}>
          {!isOnUpdate && <div>{product.name}</div>}
          {isOnUpdate && (
            <TextField
              onChange={(event) => {
                setNewName(event.target.value);
                setNewPrice(newPrice);
                setNewWeight(newWeight);
              }}
              label="name"
              defaultValue={product.name}
              InputProps={{
                style: { color: "white" },
                readOnly: !isOnUpdate,
              }}
            />
          )}
        </div>
        <div className={style.div}>
          {!isOnUpdate && <div>{product.productCategory.name}</div>}
          {isOnUpdate && (
            <TextField
              label="category"
              defaultValue={product.productCategory.name}
              InputProps={{
                style: { color: "white" },
                readOnly: true,
              }}
            />
          )}
        </div>
        <div className={style.div}>
          {!isOnUpdate && <div>{product.price}</div>}
          {isOnUpdate && (
            <TextField
              onChange={(event) => {
                setNewName(newName);
                setNewPrice(parseFloat(event.target.value));
                setNewWeight(newWeight);
              }}
              label="price ($)"
              defaultValue={product.price}
              InputProps={{
                style: { color: "white" },
                readOnly: !isOnUpdate,
              }}
            />
          )}
        </div>
        <div className={style.div}>
          {!isOnUpdate && <div>{product.weight}</div>}
          {isOnUpdate && (
            <TextField
              onChange={(event) => {
                setNewName(newName);
                setNewPrice(newPrice);
                setNewWeight(parseFloat(event.target.value));
              }}
              label="weight (kg)"
              defaultValue={product.weight}
              InputProps={{
                style: { color: "white" },
                readOnly: !isOnUpdate,
              }}
            />
          )}
        </div>
        <div className={style.div}>
          {!isOnUpdate && <div>{product.supplier.name}</div>}
          {isOnUpdate && (
            <TextField
              label="supplier"
              defaultValue={product.supplier.name}
              InputProps={{
                style: { color: "white" },
                readOnly: true,
              }}
            />
          )}
        </div>
        {!isOnUpdate && (
          <Grid className={style.grid} container>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <div className={style.div}>Add to cart</div>
            </Grid>
            <Grid item xs={3}>
              <div className={style.div}>
                <IconButton
                  onClick={onButtonAddToCart()}
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
        )}
        {isOnUpdate && (
          <Grid container>
            <Grid item xs={6} className={style.grid}>
              <div className={style.div}>
                <Link to="/products" className={style.link}>
                  <Button
                    className={style.updateButton}
                    onClick={onButtonSave()}
                  >
                    SAVE
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} className={style.grid}>
              <div className={style.div}>
                <Button
                  className={style.deleteButton}
                  onClick={onButtonCancel()}
                >
                  CANCEL
                </Button>
              </div>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={6} className={style.imgContainer}>
        <Grid>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={style.img}
          />
        </Grid>
        {!isOnUpdate && (
          <Grid container>
            <Grid item xs={6} className={style.grid}>
              <div className={style.div}>
                <Button
                  className={style.updateButton}
                  onClick={onButtonUpdate()}
                >
                  UPDATE
                </Button>
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
        )}
        {isOnUpdate && (
          <Grid className={style.grid}>
            <div className={style.div}></div>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
