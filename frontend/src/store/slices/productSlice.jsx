// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchProducts,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } from "../../api/productAPI";

// export const getProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await fetchProducts();
//     return response;
//   }
// );

// export const addProduct = createAsyncThunk(
//   "products/createProduct",
//   async (product) => {
//     const response = await createProduct(product);
//     return response;
//   }
// );

// export const removeProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (id) => {
//     await deleteProduct(id);
//     return id;
//   }
// );

// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.products.push(action.payload);
//       })
//       .addCase(removeProduct.fulfilled, (state, action) => {
//         state.products = state.products.filter(
//           (product) => product._id !== action.payload
//         );
//       });
//   },
// });

// export default productSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts();
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await createProduct(productData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add product"
      );
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await updateProduct(id, productData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update product"
      );
    }
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id, { rejectWithValue }) => {
    try {
      await deleteProduct(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add Product
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Edit Product
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      // Remove Product
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default productSlice.reducer;

