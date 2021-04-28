import { Button } from "@material-ui/core";
import React from "react";
import { useStyle } from "../../styles/cart/CartStyle";

interface CartProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Cart = (props: CartProps) => {
  const style = useStyle();

  const onButtonUpdate = () => (event: React.MouseEvent<unknown>) => {};

  return (
    <div className={style.root}>
      <table className={style.table}>
        <tr>
          <th className={style.th}>Name</th>
          <th className={style.th}>Category</th>
          <th className={style.th}>Price</th>
        </tr>
        <tr>
          <td className={style.td}>Jill</td>
          <td className={style.td}>Smith</td>
          <td className={style.td}>50</td>
        </tr>
        <tr>
          <td className={style.td}>Eve</td>
          <td className={style.td}>Jackson</td>
          <td className={style.td}>94</td>
        </tr>
      </table>
      <div className={style.divCheckout}>
        <Button className={style.buttonCheckout} onClick={onButtonUpdate()}>
          Checkout
        </Button>
      </div>
    </div>
  );
};
