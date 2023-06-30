import mongoose from  'mongoose'

const userScehma = mongoose.Schema({
    FullName: String,
    Email: {
        type: String,
        required:[ true , "please you need to provide email"]
    },
    State: String, 
    City: String,
    Password:{
        type:String,
        required: [true , "password is required"],
    },
    CreatedAt :{
        type:Date,
        default: new Date
    }
})

const ProductSchema = new mongoose.Schema({
    Category:{type:String},
    Brand:{type:String,
    require:[true ,"provide brand"]
    }
})
const productItem = new mongoose.Schema({
   ProductName:{
    type: String,
    require: [true, "Product name is essential"],
    unique: true
   } ,
   ProductImage:[String],
   
Price:[String],
Descriptions:String

});
export const product ={
    ProductBrand: mongoose.model("ProductBrand",ProductSchema,"Products"),
    ProductItem: mongoose.model("ProductItem",productItem,"Products")
}


const User = mongoose.model("user",userScehma) 
export default User ;