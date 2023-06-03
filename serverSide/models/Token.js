//=> node Dependencies
import mongoose from 'mongoose';


 const TokenSchema =  mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    Token:{
        type:String,
        required:true,
    },
    CreatedAt:{
        type:Date,
        Default: Date.now,
        expires: 3600,
    }
 })
 const Tokens = mongoose.model("Token",TokenSchema)
 export default Tokens;