


import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  const response = await axiosInstance.get(
    "https://simple-crud-mern.onrender.com/api/products"
  );
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axiosInstance.post(
    "https://simple-crud-mern.onrender.com/api/products",
    productData
  );
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axiosInstance.put(
    `https://simple-crud-mern.onrender.com/api/products/${id}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(
    `https://simple-crud-mern.onrender.com/api/products/${id}`
  );
  return response.data;
};

