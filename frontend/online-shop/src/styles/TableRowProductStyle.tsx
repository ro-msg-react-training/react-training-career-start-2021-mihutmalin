import { makeStyles } from "@material-ui/core";

export const tableRowProductStyle = makeStyles( theme =>({
    tdStyle: {
        textAlign: 'center',
        padding: '10px',
	    border: 'solid',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark
    },
    buttonStyle: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.main,
        display: 'block',
        marginLeft:'auto',
        marginRight:'auto',
        width: '50%'
    }
}));