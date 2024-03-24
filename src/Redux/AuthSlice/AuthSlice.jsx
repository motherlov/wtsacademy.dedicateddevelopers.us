import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AxiosInstance from "../Helper/Helper";
import { Navigate } from "react-router-dom";


const initialState = {
  redirect: null
};


export const login = createAsyncThunk("/user/signin",async (formData) => {
    let res = await AxiosInstance.post(`/user/signin/`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const signup = createAsyncThunk("/user/signup",async (formData) => {
    let res = await AxiosInstance.post(`/user/signup/`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const AuthSlice = createSlice({
    name: "registration",
    initialState,
      reducers: {
        reset_redirectToUpdate: (state, { payload }) => {
 
          state.redirect = payload;         
        },
       logout :(state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("name")
       }
      },

  
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(login.fulfilled, (state, {payload}) => {
        console.log("payload",payload, state.redirect);
          if(payload.status===200){
            state.status = "idle";
            state.redirect="/"
       
            localStorage.setItem("token",payload?.token)
            toast(payload?.message)
          }
        else{
          state.status = "Rejected";
          toast(payload?.message)
        }
        })
        .addCase(login.rejected, (state, action) => {
          state.status = "idle";
        })
        .addCase(signup.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(signup.fulfilled, (state, {payload}) => {
          
          if(payload.status===200){
            state.status = "idle";
            state.redirect="/login"
            
            localStorage.setItem("name",payload?.data.first_name)
            toast(payload?.message)
          }
          else{
            state.status = "Rejected";
            toast(payload?.message)
          }
        })
        .addCase(signup.rejected, (state, action) => {
          state.status = "idle";
        })
       
    },
  });

export const {reset_redirectToUpdate,logout} = AuthSlice.actions;
  
 export default AuthSlice;