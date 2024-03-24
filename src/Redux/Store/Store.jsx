import { configureStore } from "@reduxjs/toolkit";
//import AuthSlice from "./AuthSlice";
import CrudSlice from "../CrudSlice/CrudSlice";
import AuthSlice from "../AuthSlice/AuthSlice";

const Store =configureStore({
    reducer: {
     
        Auth:AuthSlice.reducer,
        // Crud:productSlice.reducer
        Crud:CrudSlice.reducer,
       
      },
})
export default Store