import {createAsyncThunk,createSlice }  from "@reduxjs/toolkit"
import {UserApi} from '../../Api/api';

// get user data from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState ={
    user: user ? user : null,
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const register= createAsyncThunk('auth/register', async ( user,thunkAPI) =>{
    try {
        return await UserApi(user)
    } catch (error) {
        const message = (error.response && error.response.data 
             && error.response.data.msg) || error.message || error.toString();
             return thunkAPI.rejectWithValue(message)
            }
        })
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
        
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer