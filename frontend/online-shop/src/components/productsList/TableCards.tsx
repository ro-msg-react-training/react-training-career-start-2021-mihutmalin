import { DescriptionCard } from "./DescriptionCard";
import { useStyle } from "../../styles/productsList/TableCards";
import { GridList, GridListTile } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { getAll } from "../../services/ProductService";

export const TableCards = (props: any) => {
  const style = useStyle();

  const [width, setWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(4);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setWidth(window.innerWidth);
    try {
      getAll().then((result) => {
        setData(result.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    setColumns(width < 700 ? 1 : width >= 700 && width < 1100 ? 2 : 3);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const tableItems = data.map((product) => (
    <GridListTile key={product.id.toString()} className={style.tile}>
      <img src={product.imageUrl} alt={product.name} />
      <DescriptionCard
        id={product.id}
        name={product.name}
        price={product.price}
        weight={product.weight}
        category={product.productCategory.name}
        supplier={product.supplier.name}
        imgUrl={product.imageUrl}
      />
    </GridListTile>
  ));

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
