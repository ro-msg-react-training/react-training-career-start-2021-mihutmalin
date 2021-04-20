import React from 'react';
import {TableRowProduct} from './TableRowProduct';
import '../styles/TableProductsStyle.css';

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
    const tableItems = products.map((product) =>
    <TableRowProduct key={product.id.toString()} 
    id={product.id} 
    category = {product.category}
    name={product.name}
    price = {product.price}/>
    );
    return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>CATEGORY</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th></th>
            </tr>
        </thead>
        <tbody>{tableItems}</tbody>
    </table>
    );
};