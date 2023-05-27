//=> REQUESTING NODE DENPENDENCIES
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"



//=> REQUESTING NODE MODULES
import User from '../models/userModels.js'

//=> generating user token
const generateJwtToken = id =>{ return jwt.sign({id},process.env.jwt_secret,{
        expiresIn:process.env.jwt_expire_Time,
    });
}


export const getUser = asyncHandler( async  (req,res)=>{
    res.status(200).json(
      req.user
    )
})


export const RegisterUser = asyncHandler( async (req,res)=>{
    //=> retriving registered data
   
    const { FirstName, LastName,Email  , Password, City , State } = req.body;



//=> check if user  exist 
const UserExist = await User.findOne({Email})
if(UserExist){  
    res.status(400).json({msg: " User already exist"})
    
}else{
 //=> hash the password
 const salt = await bcrypt.genSalt(10);
 const hashedpassword = await bcrypt.hash(Password , salt)
 
 //=> creat user  
 const user = await User.create({
     FullName : LastName + "  " + FirstName,
     Email: Email,
     Password : hashedpassword,
     City: City,
     State: State,
 
 });
 
 
 if(user){
     res.status(201).json({
         _id : user.id,
         FullName : user.FullName,
         Email : user.Email,
         token:generateJwtToken(user.id)
     })
 }else{
         //res.status(400)
         throw new Error(" Invalid user data")
     }
}
});

   



export const updateUser = asyncHandler( async(req,res)=>{
res.status(201).json({ me: "hello updater"})
})

export const UserLogin = asyncHandler( async(req,res)=>{
    const { Email , Password} = req.body
   
    //=> check for a user
    const user = await User.findOne({Email});

    if( user && ( await bcrypt.compare(Password ,user.Password))){
        res.status(200).json({
            _id : user.id,
            FullName : user.FullName,
            Email : user.Email,
            token: generateJwtToken(user.id)
        })
    }else{   

        res.status(400).json({ msg: "Invalid credentials"})
    }
})

