import axios from "axios";
import { httpRequest } from "../httpRequest";
import { getCookie } from "../utils/helpers/cookies";
export const createCategory = async (dataForm) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  };
  const res = await axios.post(
    `${httpRequest.url}/api/category`,
    dataForm,
    config
  );
  return res;
};

export const getCategories = async () => {
  const res = await axios.get(`${httpRequest.url}/api/category`);

  return res;
};
