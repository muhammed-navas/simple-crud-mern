

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;


