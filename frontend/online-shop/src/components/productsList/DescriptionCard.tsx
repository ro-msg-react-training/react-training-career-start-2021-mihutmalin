import { Button, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { useStyle } from '../../styles/productsList/DescriptionCardStyle';
import { ThemeProvider } from '@material-ui/styles';
import { standardTheme } from '../../themes/StandardTheme';
import { Link } from 'react-router-dom';

export interface Product {
    id: bigint;
    name: string;
    price: number;
    weight:number;
    category: string;
    supplier: string;
    imgUrl: string
}

export const DescriptionCard = (props: Product) => {
    const style = useStyle(); 

    return (
        <ThemeProvider theme={standardTheme}>
            <GridListTileBar
                title={<span>{props.name}  ${props.price}</span>}
                subtitle={
                    <span>{props.category}</span>
                }
                actionIcon={
                    <Link to={{ pathname: `/product/${props.id}`, state: { product: props} }}>
                        <Button className={style.buttonStyle}>
                            Details
                        </Button>
                    </Link>
                }
            />
        </ThemeProvider>
    );
};