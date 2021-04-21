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

  const tableItems = products.map(product =>
    <GridListTile key={product.id.toString()} className={style.tile}>
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
    <ThemeProvider theme={standardTheme}>
      <div className={style.root}>
        <GridList cellHeight={300} className={style.gridList}>
          {tableItems}
        </GridList>
      </div>
    </ThemeProvider>
  );
}