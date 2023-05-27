import {createAsyncThunk,createSlice }  from "@reduxjs/toolkit"
import {UserLogApi} from '../../Api/api';

// get user data from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const initialState ={
    user: user ? user : null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const Login= createAsyncThunk('authLogin/Login', async ( user,thunkAPI) =>{
    try {
        return await UserLogApi(user)
    } catch (error) {
      const message =  error.response.data
           || error.message || error.toString();
             return  thunkAPI.rejectWithValue(message)
            }
        })


//.log(ErrorMsg)
export const authSlice = createSlice({
    name: "authLogin",
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
        .addCase(Login.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
         .addCase(Login.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(Login.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user= action.payload
        })
       
        
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer