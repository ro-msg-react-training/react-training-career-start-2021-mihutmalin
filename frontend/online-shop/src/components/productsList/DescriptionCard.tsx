import { Button, GridListTileBar } from "@material-ui/core";
import { useStyle } from "../../styles/productsList/DescriptionCardStyle";
import { ThemeProvider } from "@material-ui/styles";
import { standardTheme } from "../../themes/StandardTheme";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/ProductInterface";

interface DescriptionCardProps {
  product: Product;
}

export const DescriptionCard = (props: DescriptionCardProps) => {
  const style = useStyle();

  return (
    <GridListTileBar
      title={
        <span>
          {props.product.name} ${props.product.price}
        </span>
      }
      subtitle={<span>{props.product.productCategory.name}</span>}
      actionIcon={
        <Link
          to={{
            pathname: `/product/${props.product.id}`,
          }}
        >
          <Button className={style.buttonStyle}>Details</Button>
        </Link>
      }
    />
  );
};
