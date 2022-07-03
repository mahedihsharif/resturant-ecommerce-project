import axios from "axios";
import { httpRequest } from "../httpRequest";

//signin api

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    `${httpRequest.url}/api/auth/signup`,
    data,
    config
  );
  return res;
};

//signin api
export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    `${httpRequest.url}/api/auth/signin`,
    data,
    config
  );
  return res;
};
