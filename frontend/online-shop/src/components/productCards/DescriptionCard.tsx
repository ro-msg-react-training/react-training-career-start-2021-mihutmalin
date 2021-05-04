import { Button, GridListTileBar } from "@material-ui/core";
import { useStyle } from "../../styles/productCards/DescriptionCard.style";
import { Link } from "react-router-dom";
import { Product } from "../../model/Product";

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
            pathname: `/products/${props.product.id}`,
          }}
        >
          <Button className={style.buttonStyle}>Details</Button>
        </Link>
      }
    />
  );
};
