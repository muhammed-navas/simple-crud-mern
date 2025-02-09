// import axiosInstance from "./axiosInstance";

// export const fetchProducts = async () => {
//   const response = await axiosInstance.get("/products");
//   return response.data;
// };

// export const createProduct = async (product) => {
//   const response = await axiosInstance.post("/products", product);
//   return response.data;
// };
// // not correct parameter is id no product correct it 
// export const deleteProduct = async (id) => {
//   const response = await axiosInstance.post(`/products:${id}`);
//   return response.data;
// };
// export const updateProduct = async (id) => {
//   const response = await axiosInstance.post(`/products:${id}`);
//   return response.data;
// };



import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axiosInstance.post(
    "http://localhost:5000/api/products",
    productData
  );
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axiosInstance.put(
    `http://localhost:5000/api/products/${id}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axiosInstance.delete(
    `http://localhost:5000/api/products/${id}`
  );
  return response.data;
};

