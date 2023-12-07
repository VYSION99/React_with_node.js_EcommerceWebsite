import {createAsyncThunk,createSlice }  from "@reduxjs/toolkit"
import {AdminApi,AdminLogApi} from '../../Api/api';

// get admin data from localStorage
const admin = JSON.parse(localStorage.getItem('admin'));
const initialState ={
    admin: admin ? admin : null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const Admin= createAsyncThunk('AdminLogger/resg', async ( admin,thunkAPI) =>{
    try {
        return await AdminApi(admin)
    } catch (error) {
      const message =  error.response.data
           || error.message || error.toString();
             return  thunkAPI.rejectWithValue(message)
            }
        })

        export const AdminLog= createAsyncThunk('AdminLogger/Log', async ( admins,thunkAPI) =>{
            try {
                return await AdminLogApi(admins)
            } catch (error) {
               
             const message =  error.response.data || error.message || error.toString();
                     return  thunkAPI.rejectWithValue(message)
                    }
                })

//.log(ErrorMsg)
export const AdminSlice = createSlice({
    name: "AdminLogger",
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
        .addCase(Admin.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
         .addCase(Admin.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(Admin.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.admin= action.payload
        })
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
})



export const {reset} = AdminSlice.actions;

export var AdminSlicer = AdminSlice.reducer