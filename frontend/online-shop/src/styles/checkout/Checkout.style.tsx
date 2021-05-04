import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "90vh",
      flexGrow: 1,
      textAlign: "center",
    },
    container: {
      marginTop: "5%",
    },
    gridColumn: {
      display: "flex",
      flexDirection: "column",
    },
    gridCell: {
      height: "15vh",
    },
  })
);
