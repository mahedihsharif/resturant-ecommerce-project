import axios from "axios";
import { httpRequest } from "../httpRequest";
export const createCategory = async (dataForm) => {
  console.log(dataForm);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    `${httpRequest.url}/api/category`,
    dataForm,
    config
  );
  return res;
};
