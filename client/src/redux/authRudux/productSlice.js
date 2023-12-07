import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { ProductApi } from "../../Api/api";

var Product = JSON.parse(localStorage.getItem("products"))

const initialState ={
    Product:[Product] ? [Product]:null,
    Isloading:false,
    Ispublished: false,
    Iserror:false,
    msg: ""
}

export  const createProduct = createAsyncThunk( "product/published" , async (Product, thunkAPI)=>{
       try {
        const token = thunkAPI.getState().Admin.admin.token
        
        return await ProductApi(Product,token)
       } catch (error) {
         console.log(error);
        const message =
         ( error.response.data && error.response.data.msg )|| error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
       }


})

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        reset : (state)=> initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createProduct.pending, (state) => {
          state.Isloading = true;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
          state.Isloading = false
          state.Ispublished = true
          state.Product.push(action.payload)
        })
        .addCase(createProduct.rejected, (state, action) => {
          state.Iserror = true
          state.Isloading = false
          state.Ispublished = false
          state.msg = action.payload
        });
    }
})
export const {reset} = productSlice.actions
export default productSlice.reducer;