import axios from "axios";

//signin api

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    "http://localhost:5000/api/auth/signup",
    data,
    config
  );
  return res;
};

// function throwObjWithStacktrace() {
//   const someError = { statusCode: 500 };
//   Error.captureStackTrace(someError);
//   throw someError;
// }

//signin api
export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    "http://localhost:5000/api/auth/signin",
    data,
    config
  );
  return res;
};
