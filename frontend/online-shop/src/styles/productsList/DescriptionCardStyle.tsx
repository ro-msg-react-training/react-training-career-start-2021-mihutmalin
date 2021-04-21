import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles( (theme: Theme) => createStyles({
    buttonStyle: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        fontSize: '12px'
    }
}));