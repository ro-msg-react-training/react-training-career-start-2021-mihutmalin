import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "1%",
      overflow: "hidden",
    },
    gridList: {},
    tile: {
      transition: "transform .2s",
      filter: "grayscale(50%)",
      "&:hover": {
        filter: "none",
      },
    },
  })
);
