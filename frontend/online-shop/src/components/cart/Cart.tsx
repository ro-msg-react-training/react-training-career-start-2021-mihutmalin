import { Button } from "@material-ui/core";
import React from "react";
import { Product } from "../../model/ProductInterface";
import { store } from "../../store/Store";
import { useStyle } from "../../styles/cart/CartStyle";

interface CartProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Cart = (props: CartProps) => {
  const style = useStyle();

  const onButtonUpdate = () => (event: React.MouseEvent<unknown>) => {};

  const tableItems = store.getState().cart.cart.map((product: Product) => (
    <tr key={product.id.toString()}>
      <td className={style.td}>{product.name}</td>
      <td className={style.td}>{product.productCategory.name}</td>
      <td className={style.td}>{`$ ${product.price}`}</td>
    </tr>
  ));

  return (
    <div className={style.root}>
      <table className={style.table}>
        <tbody>{tableItems}</tbody>
      </table>
      <div className={style.divCheckout}>
        <Button className={style.buttonCheckout} onClick={onButtonUpdate()}>
          Checkout
        </Button>
      </div>
    </div>
  );
};
