import {DescriptionCard, Product} from './DescriptionCard';
import { useStyle } from '../../styles/productsList/TableCards';
import { ThemeProvider } from '@material-ui/styles';
import { standardTheme } from '../../themes/StandardTheme';
import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from '@material-ui/core';
import { ProductDetails } from '../productDetails/ProductDetails';

import img1 from '../../resources/1.jpg';
import img2 from '../../resources/2.jpg';
import img3 from '../../resources/3.jpg';
import img4 from '../../resources/4.jpg';
import img5 from '../../resources/5.jpg';
import React from 'react';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

const products= [ 
  {
    id: BigInt(1),
    name:"ProductName1",
    price: 1,
    weight: 1,
    category:"Category1",
    supplier:"Supplier1",
    imgUrl: img1
  },
  {
    id: BigInt(2),
    name:"ProductName2",
    price: 2,
    weight: 2,
    category:"Category2",
    supplier:"Supplier2",
    imgUrl: img2
  },
  {
    id: BigInt(3),
    name:"ProductName3",
    price: 3,
    weight: 3,
    category:"Category3",
    supplier:"Supplier3",
    imgUrl: img3
  },
  {
    id: BigInt(4),
    name:"ProductName4",
    price: 4,
    weight: 4,
    category:"Category4",
    supplier:"Supplier4",
    imgUrl: img4
  },
  {
    id: BigInt(5),
    name:"ProductName5",
    price: 5,
    weight: 5,
    category:"Category5",
    supplier:"Supplier5",
    imgUrl: img5
  },
]

export const TableCards = (props: any) => {
  const style = useStyle(); 

  const [width, setWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    setWidth(window.innerWidth)
  },[]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    setColumns(width < 700 ? 1 : (width >= 700 && width <1100 ? 2:3))

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const tableItems = products.map(product =>
    
    <GridListTile key={product.id.toString()}  className={style.tile}>
      <img src={product.imgUrl} alt={product.name} />
      <DescriptionCard 
        id={product.id} 
        name={product.name}
        price = {product.price}
        weight = {product.weight}
        category = {product.category}
        supplier = {product.supplier}
        imgUrl = {product.imgUrl}
      />      
    </GridListTile>
  );

  return (
    <Grid item xs={12} className={style.root}>
        <GridList cols={columns} cellHeight={300} spacing={20} className={style.gridList}>
          {tableItems}
        </GridList>
    </Grid>
  );
}