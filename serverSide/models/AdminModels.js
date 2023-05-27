//=> REQUESTING DEPENDENCIES
import mongoose from  "mongoose"

const AdminSchema = mongoose.Schema({
AdminName:{
    type: String,
    required:[true , "please provide name in order to operate"]
},
Email:{
    type: String,
    required: [true, " please provide email"],
    unique: true
},
AdminId:{
    type: String,
    required: true,
    unique: true  

},
role :{
    type:String,
    unique:true
},
CreatedAt : {
    type:Date,
    default: new Date
}
});

const Admin = mongoose.model("Admin" , AdminSchema)
export default Admin;
