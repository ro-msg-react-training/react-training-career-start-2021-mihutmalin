import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      fontSize: "30px",
      height: "90vh",
      overflow: "hidden",
    },
    table: {
      marginTop: "5%",
      marginRight: "auto",
      marginLeft: "auto",
      border: "1px solid black",
      width: "75vw",
      borderCollapse: "collapse",
    },
    th: {
      background: theme.palette.primary.dark,
      color: "white",
      fontWeight: "bold",
    },
    td: {
      padding: "10px",
      border: "1px solid #ccc",
      textAlign: "left",
    },
    divCheckout: {
      marginTop: "5%",
    },
    buttonCheckout: {
      backgroundColor: "black",
      color: "white",
    },
  })
);
