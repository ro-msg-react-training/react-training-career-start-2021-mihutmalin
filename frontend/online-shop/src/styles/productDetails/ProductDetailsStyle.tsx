import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles( (theme: Theme) => createStyles({
    root: {
        overflow: 'hidden'
    },
    info: {
        width:'100%'
    },
    img: {
        objectFit: 'cover',
        maxWidth: '50%',
        maxHeight: '100vh',
    },
    grid: {
        backgroundColor: theme.palette.primary.dark,
    },
    div: {
        color:'white',
        fontSize: '25px',
        margin: '0 auto',
        textAlign:'center',
        lineHeight: '16.666vh'
    },
    button: {
        backgroundColor: theme.palette.primary.main
    },
    buttonIcon: {
        color: theme.palette.primary.light
    },
}));