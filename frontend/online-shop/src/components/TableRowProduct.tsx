import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/TableRowProductStyle.css';

interface Props {
    id: bigint;
    category: string;
    name: string;
    price: number;
}

export const TableRowProduct = (props: any) => {
   
    return (
        <tr>
            <td data-column="ID">{props.id.toString()}</td>
            <td data-column="CATEGORY">{props.category}</td>
            <td data-column="NAME">{props.name}</td>
            <td data-column="PRICE">{props.price}</td>
            <td> <Button variant="contained" color="primary" component="span">
                    Detail
                </Button>
            </td>
        </tr>
    );
};