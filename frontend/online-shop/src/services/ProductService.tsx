import axios from "axios";
import { Product } from "../model/ProductInterface";

export const getAllProducts = async () => {
  const result: Product[] = await axios
    .get("http://localhost:8080/products", {
      auth: {
        username: "ovidiududa",
        password: "12345",
      },
    })
    .then((result) => {
      return result.data;
    });

  return result;
};

export const getProductById = async (id: number) => {
  const result = await axios.get("http://localhost:8080/products/" + id, {
    auth: {
      username: "ovidiududa",
      password: "12345",
    },
  });

  return result;
};

export const updateProductById = async (id: number, product: Product) => {
  const result = await axios.put(
    "http://localhost:8080/products/" + id,
    product,
    {
      auth: {
        username: "ovidiududa",
        password: "12345",
      },
    }
  );

  return result;
};

export const deleteProduct = async (id: number) => {
  const result = await axios.delete("http://localhost:8080/products/" + id, {
    auth: {
      username: "ovidiududa",
      password: "12345",
    },
  });

  return result;
};
