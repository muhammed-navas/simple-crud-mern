import axios from "axios";

export const loginAdmin = async (credentials) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    credentials
  );
  const token = response.data.accessToken;
  console.log(token,'--')
  localStorage.setItem("token", token);
  return response.data;
};

// New register function
export const registerUser = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/register",
    userData
  );
  const token = response.data.accessToken;
  localStorage.setItem("token", token);
  return response.data;
};