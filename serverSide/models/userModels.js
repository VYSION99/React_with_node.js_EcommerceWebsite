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
//............................................................ product schema ......................................//

const productItem = new mongoose.Schema({
   ProductName:{
    type: String,
    require: [true, "Product name is essential"],
    
   } ,
  
   Category:{type:String},
    Brand:{type:String,
    require:[true ,"provide brand"]
    },
Price:[String],
Descriptions:String

});
export const product ={
    ProductItem: mongoose.model("ProductItem",productItem,"Products")
}


const User = mongoose.model("user",userScehma) 
export default User ;