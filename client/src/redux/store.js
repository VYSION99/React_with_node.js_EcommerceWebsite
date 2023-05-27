import {configureStore} from "@reduxjs/toolkit";
import signReducer from "./authRudux/signUpSlice"
import logReducer from "./authRudux/loginSlice"
import {AdminSlicer} from "./authRudux/adminSlice"
import AdminLogins from "./authRudux/AdminLogSlice"




export const  store = configureStore({

    reducer:{
        Sign:signReducer,
            
        Log:logReducer,
        AdminSign: AdminSlicer,
        AdminLogs: AdminLogins,
        
    },

})

