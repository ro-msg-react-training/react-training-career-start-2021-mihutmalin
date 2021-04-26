import axios from "axios";
/*
export const getAllProducts = () => {
  axios
    .get("http://localhost:8080/products", {
      auth: {
        username: "ovidiududa",
        password: "12345",
      },
    })
    .then((result) => {
      return result.data;
    });
};
*/

export const getAllProducts = async () => {
  const result = await axios
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

export const getProduct = async (id: any) => {
  const result = await axios.get("http://localhost:8080/products/" + id, {
    auth: {
      username: "ovidiududa",
      password: "12345",
    },
  });

  return result;
};

export const deleteProduct = async (id: any) => {
  const result = await axios.delete("http://localhost:8080/products/" + id, {
    auth: {
      username: "ovidiududa",
      password: "12345",
    },
  });

  return result;
};
