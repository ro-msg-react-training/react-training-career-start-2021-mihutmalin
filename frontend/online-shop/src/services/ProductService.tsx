import axios from "axios";

export const getAll = async () => {
  const result = await axios.get("http://localhost:8080/products", {
    auth: {
      username: "ovidiududa",
      password: "12345",
    },
  });

  return result;
};
