import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      color: "white",
      fontSize: "60px",
      backgroundColor: "black",
      height: "90vh",
    },
  })
);
