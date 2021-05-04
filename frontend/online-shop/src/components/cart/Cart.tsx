import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../model/Product";
import { store } from "../../store/Store";
import { useStyle } from "../../styles/cart/Cart.style";

interface CartProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Cart = (props: CartProps) => {
  const style = useStyle();

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
        <thead>
          <tr>
            <th className={style.th}>Name</th>
            <th className={style.th}>Category</th>
            <th className={style.th}>Price</th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </table>
      <div className={style.divCheckout}>
        <Link to="/checkout" className={style.link}>
          <Button className={style.buttonCheckout}>Checkout</Button>
        </Link>
      </div>
    </div>
  );
};
