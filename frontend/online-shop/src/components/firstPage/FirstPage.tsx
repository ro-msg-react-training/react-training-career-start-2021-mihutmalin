import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsRequest } from "../../actions/ProductCardsActions";
import { useStyle } from "../../styles/firstPage/FirstPage.style";

interface FirstPageProps {}

export const FirstPage = (props: FirstPageProps) => {
  const style = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsRequest());
  });

  return (
    <div className={style.root}>
      <img
        src="https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Alternative name"
        className={style.img}
      />
    </div>
  );
};
