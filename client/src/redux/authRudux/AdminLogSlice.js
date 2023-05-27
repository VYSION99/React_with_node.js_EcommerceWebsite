import {createAsyncThunk,createSlice }  from "@reduxjs/toolkit"
import {AdminLogApi} from '../../Api/api';

// get admin data from localStorage
const admin = JSON.parse(localStorage.getItem('Admin'));
const initialState ={
    admin: admin ? admin : null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:''
}





export const AdminLog= createAsyncThunk('AdminLogin/Log', async ( admins,thunkAPI) =>{
    try {
        return await AdminLogApi(admins)
    } catch (error) {
      const message =  error.response.data
           || error.message || error.toString();
             return  thunkAPI.rejectWithValue(message)
            }
        })


export const AdminLogSlice = createSlice({
    name: "AdminLogin",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError= false
            state.isLoading= false
            state.isSuccess= false
            state.message=''
          
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(AdminLog.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
         .addCase(AdminLog.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(AdminLog.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.admin= action.payload
        })
       
        
    }
});

 export const {reset} = AdminLogSlice.actions;
export default AdminLogSlice.reducer