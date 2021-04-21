import { useStyle } from '../../styles/productDetails/ProductDetailsStyle';
import { Grid } from '@material-ui/core';

export const ProductDetails = (props: any) => {
    const style = useStyle(); 

    const {number} = props.match.params
    const {product} = props.location.state
    console.log(product)

    return (
        <Grid container className={style.root}>
            <Grid  item  className={style.info} xs={6}>
                <Grid className={style.grid} xs={12}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                    <div className={style.div}>{product.name}</div>
                </Grid>
                <Grid className={style.grid} xs={12}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                    <div className={style.div}>{product.category}</div>
                </Grid>
                <Grid className={style.grid} xs={12}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                    <div className={style.div}>$ {product.price}</div>
                </Grid>
                <Grid className={style.grid} xs={12}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                    <div className={style.div}>{product.weight} kg</div>
                </Grid>
                <Grid className={style.grid} xs={12}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                >
                    <div className={style.div}>{product.supplier}</div>
                </Grid>
            </Grid>
            <Grid className={style.img}  item  xs={6}>
                <img src={product.imgUrl} alt={product.name} />     
            </Grid>
        </Grid>
    );
};