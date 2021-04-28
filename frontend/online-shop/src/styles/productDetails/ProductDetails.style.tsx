import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "hidden",
    },
    info: {
      width: "100%",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
    imgContainer: {
      height: "90vh",
    },
    img: {
      maxWidth: "100%",
      height: "75vh",
      display: "block",
    },
    grid: {
      backgroundColor: theme.palette.primary.dark,
    },
    div: {
      color: "white",
      fontSize: "25px",
      margin: "0 auto",
      textAlign: "center",
      height: "15vh",
      lineHeight: "15vh",
    },
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    buttonIcon: {
      color: theme.palette.primary.light,
    },
    deleteButton: {
      backgroundColor: "red",
      color: "white",
    },
    updateButton: {
      backgroundColor: "white",
      color: "black",
    },
  })
);
