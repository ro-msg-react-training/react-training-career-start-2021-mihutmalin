import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles( (theme: Theme) => createStyles({
    root: {
        marginTop:'1%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: '50%',
        height: '50%',
    },
    tile: {
        transition: 'transform .2s',
        filter: 'grayscale(50%)',
        '&:hover': {
            filter: 'none',
        },
    }
}));