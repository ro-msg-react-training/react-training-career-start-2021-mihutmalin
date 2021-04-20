import { makeStyles } from "@material-ui/core";

export const tableProductsStyle = makeStyles( theme  =>({
    tableStyle: {
        width: '75%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'10%'
    },
    thStyle: {
        border: 'solid'
    },
    trStyle: {
        backgroundColor: theme.palette.primary.light,
        color:  theme.palette.primary.dark,
    }
}));