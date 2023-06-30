//=> REQUESTING NODE DENPENDENCIES
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import dotenv from "dotenv";




//=> REQUESTING NODE MODULES
import User from '../models/userModels.js'
import Token from '../models/Token.js'
import {UseEmailer} from  '../Services/smtp.js'



//=> generating user token
const generateJwtToken = id =>{ return jwt.sign({id},process.env.jwt_secret,{
        expiresIn:process.env.jwt_expire_Time,
    });
}
    dotenv.config( {path : `./config/.env`})


export const getUser = asyncHandler( async  (req,res)=>{
    res.status(200).json(
      req.user
    )
})


export const RegisterUser = asyncHandler( async (req,res)=>{
   const PSWD = /^(?=.*[1-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    //=> retriving registered data
   
    const { FirstName, LastName,Email  , Password, City , State } = req.body;

    if(!Password.match(PSWD)){
        res.status(404).json({msg:" Password should be @least 8-15 characters a number and Symbols"});
      }
    

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

   



export const PasswordReset = asyncHandler( async (req,res)=>{
    const {Email} = req.body;
    const UserData = await User.findOne({Email});
    

    //=> checking if user exit
    if(!UserData){ 
        res.status(400).json({msg:"The given email does not exist"})
    }else{

 //=> generating user reset token
 
 let TokenId = await Token.findOne({userId:UserData._id}) ;
 if(TokenId){ await Token.deleteOne()}

 const resetToken = crypto.randomBytes(32).toString('hex');
 const hash = await bcrypt.hash(resetToken,Number(10));
 
 // reset token saved
  await new Token({
    userId: UserData._id,
    Token: hash,
    CreatedAt: Date.now()
  }).save()
 const link = `${process.env.Client_BaseUrl}?token=${hash}&id=${UserData._id}`;
 UseEmailer(Email,link,res);
}

})
export const PasswordRecovery = asyncHandler( async (req,res)=>{
   const {Password,Cpassword,token,_id} = req.body;
 const  VerifiedPassword = Password === Cpassword;
 
 if(!VerifiedPassword){res.status(400).json({msg:"Password does not match"})}else{
     
     const VerifyToken = await Token.findOne({userId:_id});
    
       // checking verification  
       if(!VerifyToken){ 
           res.status(400).json({msg:"invalid true or expired password reset token"});
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashed= await bcrypt.hash(Password , salt)
            if(VerifyToken.Token == token ){   
           console.log(_id,hashed)
            const id = _id;
        //=> set User Password to the New reset Password
          await User.updateOne(
                {_id:id},
                {$set: {
                  Password:hashed
                }},{new:true}
                 )
                res.status(200).json({msg:"You have sucessfully reset your password"})

            }else{
                res.status(400).json({msg:"invalid false or expired password reset token"})
            }
       
       }


   }
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

        res.status(400).json({ message: "Invalid Password or Email"})
    }
})

