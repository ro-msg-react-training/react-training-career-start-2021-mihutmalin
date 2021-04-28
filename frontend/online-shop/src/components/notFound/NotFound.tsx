import { useStyle } from "../../styles/notFound/NotFound.style";

interface NotFoundProps {}

export const NotFound = (props: NotFoundProps) => {
  const style = useStyle();

  return <div className={style.root}>ERROR 404 NOT FOUND</div>;
};
