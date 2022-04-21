import axios from "axios";

//signin api

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/api/auth/signup", data, config);
  return res;
};

//signin api

export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/api/auth/signin", data, config);
  return res;
};
