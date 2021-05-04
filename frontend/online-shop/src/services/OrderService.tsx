import axios from "axios";
import { InputDTO } from "../model/order/InputDTO";

export const createOrder = async (product: InputDTO) => {
  const result = await axios.post("http://localhost:8080/order/", product, {
    auth: {
      username: "ovidiududa",
      password: "12345",
    },
  });

  return result;
};
