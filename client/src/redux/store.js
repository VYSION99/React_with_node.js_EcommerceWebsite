import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authRudux/signUpSlice"
import {AdminSlicer} from "./authRudux/adminSlice"
import AdminLogins from "./authRudux/AdminLogSlice"




export const  store = configureStore({

    reducer:{
        auth:authReducer,
            
    
        AdminSign: AdminSlicer,
        AdminLogs: AdminLogins,
        
    },

})

