import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addProduct = createAsyncThunk(`product/create`,async (formData) => {
    const res = axiosInstance.post(`/product/create`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const getProducts = createAsyncThunk(`product/list`,async (formData) => {
    const res = await axiosInstance.post(`/product/list`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const userDetails = createAsyncThunk(`/user/profile-details`,async (formData) => {
    const res = await axiosInstance.get(`/user/profile-details`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const removeProduct = createAsyncThunk(
  `product/remove`,
  async (formData) => {
    const res = axiosInstance.post(`/product/remove`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const getProductById = createAsyncThunk(`product/detail/:id`,async (id) => {
    const res = await axiosInstance.get(`product/detail/${id}`);
    let resData = res?.data;
    return resData;
  }
);

export const updateProductDetail = createAsyncThunk(`/product/update`,async (formData) => {
    const res = await axiosInstance.post(`/product/update`, formData);
    let resData = res?.data;
    return resData;
  }
);

let initialState = {
  crtProductRes: null,
  ProductList: [],
  loading: false,
  updateProduct: [],
  user: [],
  totalPages: "",
};
const CrudtSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.status = "idle";
        toast.success(payload?.message);
       
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.status = "idle";
      })
      /////////////////////////////////// getProduct   ///////////////////////////////////////////////////
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.ProductList = payload.data;
        state.totalPages = payload?.totalPages;
       
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      //////////////////////////////////  user  /////////////////////////////////////////////////////////
      .addCase(userDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userDetails.fulfilled, (state, { payload }) => {
        state.user = payload.data;
       toast.success(payload?.message);
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      ////////////////////////////////  removeProduct //////////////////////////////////////////
      .addCase(removeProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        state.status = "success";
        // toast.success(payload?.message);
        toast.success("Data Delete Successfully");
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      /////////////////////////////// getProductById ///////////////////////////////
      .addCase(getProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.updateProduct = payload.data;
        toast.success(payload?.message);
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      ///////////////////////// updateProductDetail ////////////////////////////

      .addCase(updateProductDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductDetail.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        toast.success(payload?.message);
      })
      .addCase(updateProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.payload.message);
      });
  },
});


// export const {reset_redirectToUpdate} = CrudtSlice.actions;

export default CrudtSlice;