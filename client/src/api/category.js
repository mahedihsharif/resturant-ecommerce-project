import axios from "axios";

export const createCategory = async (dataForm) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(
    "http://localhost:5000/api/category",
    dataForm,
    config
  );
  return res;
};
