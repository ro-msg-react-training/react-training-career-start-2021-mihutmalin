import { DescriptionCard } from "./DescriptionCard";
import { useStyle } from "../../styles/productsList/TableCards";
import { GridList, GridListTile } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Product } from "../../interfaces/ProductInterface";
import {
  getAllProductsRequest,
  getAllProductsSuccess,
} from "../../actions/TableCardsActions";
import { AppState, store } from "../../store/Store";
import { Dispatch } from "redux";

interface TableCardsProps {
  products: Product[];
  //getAllProd: () => void;
  //getAllProdSuccess: (products: Product[]) => void;
}

export const TableCards = (props: TableCardsProps) => {
  const style = useStyle();

  const [width, setWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    setWidth(window.innerWidth);
    dispatch(getAllProductsRequest());
  }, []);
  console.log(store.getState().products);

  //CONSOLE LOG
  console.log(props);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    setColumns(width < 700 ? 1 : width >= 700 && width < 1100 ? 2 : 3);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  let tableItems: {} | null | undefined = [];
  if (props.products != undefined) {
    tableItems = props.products.map((product: Product) => (
      <GridListTile key={product.id.toString()} className={style.tile}>
        <img src={product.imageUrl} alt={product.name} />
        <DescriptionCard product={product} />
      </GridListTile>
    ));
  }

  return (
    <Grid item xs={12} className={style.root}>
      <GridList
        cols={columns}
        cellHeight={300}
        spacing={20}
        className={style.gridList}
      >
        {tableItems}
      </GridList>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllProd: () => dispatch(getAllProductsRequest()),
  getAllProdSuccess: (products: Product[]) =>
    dispatch(getAllProductsSuccess(products)),
});
/*
export default connect(mapStateToProps, {
  getAllProductsRequest,
  getAllProductsSuccess,
})(TableCards);
*/
export default TableCards;
