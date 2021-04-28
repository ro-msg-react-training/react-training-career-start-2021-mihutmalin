import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "10vh",
      flexGrow: 1,
    },
    buttonHome: {
      float: "left",
    },
    buttonCart: {
      float: "right",
    },
    buttonProducts: {
      marginRight: "auto",
      marginLeft: "auto",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
    div: {
      textAlign: "center",
    },
  })
);
