import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "90vh",
      overflow: "hidden",
    },
    img: {
      width: "100%",
      display: "block",
    },
  })
);
