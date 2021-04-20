import React from 'react';
import {TableRowProduct} from './TableRowProduct';
import { tableProductsStyle } from '../styles/TableProductsStyle';
import { ThemeProvider } from '@material-ui/styles';
import { standardTheme } from '../themes/StandardTheme';

var products=[ 
    {
      id: BigInt(1),
      name:"ProductName1",
      description:"Description1",
      price: 1,
      weight: 1,
      category:"Category1",
      supplier:"Supplier1",
      imageUrl:"Url1"
    },
    {
      id: BigInt(2),
      name:"ProductName2",
      description:"Description2",
      price: 2,
      weight: 2,
      category:"Category2",
      supplier:"Supplier2",
      imageUrl:"Url2"
    },
    {
      id: BigInt(3),
      name:"ProductName3",
      description:"Description3",
      price: 3,
      weight: 3,
      category:"Category3",
      supplier:"Supplier3",
      imageUrl:"Url3"
    }
];

interface Props {
}

export const TableProducts = (props: any) => {
    const style = tableProductsStyle(); 

    const tableItems = products.map((product) =>
    <TableRowProduct key={product.id.toString()} 
      id={product.id} 
      category = {product.category}
      name={product.name}
      price = {product.price}
    />
    );

    return (
    <ThemeProvider theme={standardTheme}>
      <table className={style.tableStyle}>
          <thead>
              <tr className={style.trStyle}>
                  <th className={style.thStyle}>ID</th>
                  <th className={style.thStyle}>CATEGORY</th>
                  <th className={style.thStyle}>NAME</th>
                  <th className={style.thStyle}>PRICE</th>
                  <th className={style.thStyle}></th>
              </tr>
          </thead>
          <tbody>{tableItems}</tbody>
      </table>
    </ThemeProvider>
    );
};