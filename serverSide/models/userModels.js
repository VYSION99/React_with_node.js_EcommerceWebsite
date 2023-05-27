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

const User = mongoose.model("user",userScehma) 
export default User ;