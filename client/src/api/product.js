import axios from "axios";
import { httpRequest } from "../httpRequest";
import { getCookie } from "../utils/helpers/cookies";

export const createProduct = async (data) => {
  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  };
  const res = await axios.post(
    `${httpRequest.url}/api/product/createProduct`,
    data,
    config
  );
  return res;
};
