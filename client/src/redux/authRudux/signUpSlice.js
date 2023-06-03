import {createAsyncThunk,createSlice }  from "@reduxjs/toolkit"
import {UserApi,UserLogApi ,LogOut,PasswordRecoveryApi,PasswordResetApi} from '../../Api/api';

// get user data from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState ={
    user: user ? user : null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:''
}
            //=> User registration Action
export const register= createAsyncThunk('auth/register', async ( user,thunkAPI) =>{
    try {
        return await UserApi(user)
    } catch (error) {
        const message = (error.response && error.response.data 
             && error.response.data.msg) || error.message || error.toString();
             return thunkAPI.rejectWithValue(message)
            }
        })


         //=> User Login Action
export const Login= createAsyncThunk('auth/login', async ( user,thunkAPI) =>{
    try {
        return await UserLogApi(user)
    } catch (error) {
        const message = (error.response && error.response.data.message) 
        || error.message || error.toString();
             return thunkAPI.rejectWithValue(message)
            }
        })

         //=> User PasswordReset Action
export const PasswordReset= createAsyncThunk('auth/reset', async ( user,thunkAPI) =>{
    try {
        return await PasswordResetApi(user)
    } catch (error) {
        const message = error.response.data
        || error.message || error.toString() ;
             return thunkAPI.rejectWithValue(message)
            }
        })


         //=> User PasswordRecovery Action
export const PasswordRecovery = createAsyncThunk('auth/recovery', async ( user,thunkAPI) =>{
    try {
        return await PasswordRecoveryApi(user)
    } catch (error) {
        const message =  error.response.data.msg 
        || error.message || error.toString();
             return thunkAPI.rejectWithValue(message)
            }
        })
                 //=> User Logout Action
export const Logout = createAsyncThunk('auth/logout', async  ()=>{
    LogOut() 
})
  //=>User slice


export const authSlice = createSlice({
    name: "auth",
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
        .addCase(register.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user= action.payload
        })
        .addCase(register.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(Login.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(Login.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user= action.payload
        })
        .addCase(Login.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(PasswordReset.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(PasswordReset.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.message= action.payload
            
        })
        .addCase(PasswordReset.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(PasswordRecovery.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(PasswordRecovery.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            
        })
        .addCase(PasswordRecovery.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(Logout.fulfilled, (state)=>{
            state.user = null
        })
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer