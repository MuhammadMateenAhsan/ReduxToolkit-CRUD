import { configureStore } from "@reduxjs/toolkit";
import employeeDetail from "../features/employeeSlice";

export const store = configureStore({
    reducer:{
        app:employeeDetail,
    }
})