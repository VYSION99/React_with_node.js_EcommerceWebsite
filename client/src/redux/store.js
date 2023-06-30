import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authRudux/signUpSlice"
import {AdminSlicer} from "./authRudux/adminSlice"





export const  store = configureStore({

    reducer:{
        auth:authReducer,
        Admin: AdminSlicer,
    },

})

