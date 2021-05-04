import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useStyle } from "../../styles/checkout/Checkout.style";
import { Alert } from "@material-ui/lab";
import { createOrder } from "../../services/OrderService";
import { AddressDTO } from "../../model/order/AddressDTO";
import { store } from "../../store/Store";
import { InputDTO } from "../../model/order/InputDTO";
import { Product } from "../../model/Product";

interface CheckoutProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Checkout = (props: CheckoutProps) => {
  const style = useStyle();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const address: AddressDTO = {
    id: BigInt(1),
    country: "Romania",
    city: "Cluj-Napoca",
    county: "Cluj",
    streetAddress: "str. Lalelelor, nr. 22",
  };

  var productsArr = store.getState().cart.cart.map((prod: Product) => ({
    productId: prod.id,
    quantity: 1,
  }));

  const input: InputDTO = {
    createDate: new Date(),
    addressDTO: address,
    products: productsArr,
    customerId: BigInt(1),
  };

  const onButtonPlaceOrder = () => (event: React.MouseEvent<unknown>) => {
    try {
      createOrder(input);
      setSuccess(true);
      setFail(false);
    } catch (e) {
      console.log(e);
      setFail(true);
      setSuccess(false);
    }
  };

  return (
    <div className={style.root}>
      <Grid container className={style.container}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3} className={style.gridColumn}>
          <TextField
            className={style.gridCell}
            label="first name*"
            defaultValue=" "
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            className={style.gridCell}
            label="country*"
            defaultValue=" "
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            className={style.gridCell}
            label="city*"
            defaultValue=" "
            InputProps={{
              readOnly: false,
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3} className={style.gridColumn}>
          <TextField
            className={style.gridCell}
            label="last name*"
            defaultValue=" "
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            className={style.gridCell}
            label="county*"
            defaultValue=" "
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            className={style.gridCell}
            label="street address*"
            defaultValue=" "
            InputProps={{
              readOnly: false,
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <div>
        <Button variant="contained" onClick={onButtonPlaceOrder()}>
          Place Order
        </Button>
      </div>
      <Grid container className={style.container}>
        <Grid item xs={3}></Grid>
        {success && (
          <Grid item xs={6}>
            <Alert severity="success">
              The order was created successfully!
            </Alert>
          </Grid>
        )}
        {fail && (
          <Grid item xs={6}>
            <Alert severity="error">The order creation failed!</Alert>
          </Grid>
        )}
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
