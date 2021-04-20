import React from 'react';
import { Button } from '@material-ui/core';
import { tableRowProductStyle } from '../styles/TableRowProductStyle';
import { ThemeProvider } from '@material-ui/styles';
import { standardTheme } from '../themes/StandardTheme';

interface Props {
    id: bigint;
    category: string;
    name: string;
    price: number;
}

export const TableRowProduct = (props: any) => {
    const style = tableRowProductStyle(); 

    return (
        <ThemeProvider theme={standardTheme}>
            <tr>
                <td className={style.tdStyle} data-column="ID">{props.id.toString()}</td>
                <td className={style.tdStyle} data-column="CATEGORY">{props.category}</td>
                <td className={style.tdStyle} data-column="NAME">{props.name}</td>
                <td className={style.tdStyle} data-column="PRICE">{props.price}</td>
                <td className={style.tdStyle}>
                    <Button className={style.buttonStyle}>
                        Details
                    </Button>
                </td>
            </tr>
        </ThemeProvider>
    );
};