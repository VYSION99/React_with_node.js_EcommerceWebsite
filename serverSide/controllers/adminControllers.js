//=> REQUESTING DEPENDENCIES
import bcrypt from "bcryptjs"
import jwt from  "jsonwebtoken"
import AsyncHandler from "express-async-handler";
import { Emailer } from "../Services/smtp.js";

//=> REQUESTING MODULES
import Admin from "../models/AdminModels.js"
import { Id_generator , global,Rolled} from "../middleware/authMiddleware.js"
import { fashData } from "../middleware/DataMiddleware.js";
//import { image } from "../Gallary/GalleryController.js";


//=> generate admin token
const adminToken = (id)=>{ return jwt.sign({id},process.env.adminJwtSecret,{
    expiresIn:process.env.jwt_expire_Time,
});
} 
 
export const getAdmin=(req,res)=>{
    
  fashData(res)
    
//res.status(202).json(image)

} 



export const setAdmin = AsyncHandler( async (req,res)=>{   
    
 const { Firstname, Lastname, Email} = req.body
Id_generator(Firstname,Lastname) 

//get admin Password
const password = global
console.log(password)
//=> checking for validation    
if( !Email || !password) {
    res.status(400).json({
        msg: 'invalid credentials'
    })
}

//=> checking if Admin already exist
const AdminExist = await Admin.findOne({Email})
if(AdminExist) res.status(400).json({msg:"Admin inputed data aready exist"})


   //=> hash the password
   const salt = await bcrypt.genSalt(10);
   const hashedpassword = await bcrypt.hash(password , salt)
    

  const success = Emailer(Email,password,res)   

//=> save admin data

if(success){
const AdminUser = await Admin.create({
    AdminName: Firstname + " " + Lastname,
    Email:Email,
   AdminId:hashedpassword,
    role:Rolled,

    
   
});
//=> get admin data
if(AdminUser){
     res.status(200).json({
        AdminName : AdminUser.AdminName, 
        Email : AdminUser.Email ,
        _Id: AdminUser._id,
        token: adminToken(AdminUser.id)  
     })
}};





});

export  const LogAdmin = AsyncHandler( async (req,res)=>{
    const  { role , AdminId} = req.body;
    const Rolled = await Admin.findOne({role});


    if( Rolled && ( await bcrypt.compare(AdminId ,Rolled.AdminId))){
        res.status(200).json({
            AdminName : Rolled.AdminName, 
            Email : Rolled.Email ,
            _Id: Rolled._id,
            token: adminToken(Rolled.id)
         })
    }else{res.status(400).json({msg:'Sorry you are not appointed as Administrator of OSM'})}
})

export const updateAdmin =AsyncHandler( async (req,res)=>{
res.json({me:"helo"})
}) 