//=> REQUESTING NODE DENPENDENCIES
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler"


//=> REQUESTING NODE MODULES
import User from '../models/userModels.js'
import Admin from '../models/AdminModels.js'
 export let global ,Rolled ;


 //=>ADMIN ID GENERATOR
export const Id_generator = (a,b) =>{ 
   
    const floor = a.charAt(0).toUpperCase() + b.charAt(0).toUpperCase() ;
 // generate Admin Id
 Rolled= floor + "-OSM";
    const Id =[]
    for(let name = 1; name <=8; name++){
    if(name){
      const num = Math.floor(Math.random()* name)
      Id.push(num)
    }   
}
const ID = Id.toString().replaceAll(",","")
const spl = ID.split('');
 spl.splice(0,0,floor);
global= spl.join('');     
}





// user route protector 
export const protectRoute =asyncHandler( async (req,res,next)=>{
    let token 
    if( req.headers.authorization &&  req.headers.authorization.startsWith("Bearer")){

        try {

            //=> get token from header
            token = req.headers.authorization.split(" ")[1];
            //=> verify token
             const decoded = jwt.verify(token,process.env.jwt_secret);

             //=> get user from the token
             req.user = await User.findById(decoded.id).select("-Password")

             //=> return next middleware
             next()

        } catch (error) {
            console.log(error)
            res.status(400)
            .json({message:" User not Authorized"})
        }
    }
    
    if(!token){
        res.status(401)
        .json( {message: "No token , User not Authorized"})
    }
})

//=>  ADMIN ROUTE PROTECTOR
export const protectAdminRoute =asyncHandler( async (req,res,next)=>{
    let token 
    if( req.headers.authorization &&  req.headers.authorization.startsWith("Bearer")){

        try {
            //=> get token from header
            token = req.headers.authorization.split(" ")[1];
            //=> verify token
             const decoded = jwt.verify(token,process.env.adminJwtSecret);

             //=> get user from the token
             req.Admin = await Admin.findById(decoded.id).select("-Password")

            const restrict = (...roles)=>{
                asyncHandler( async (req,res,next)=>{
                    if(!roles.includes(req.Admin.role)){
                       return next( res.status(403).json({msg: " please only Admin are allowed to access tihs section"})) 
                    }
                })
            }
            restrict();
             //=> return next middleware
             next()

        } catch (error) {
            console.log(error)
            res.status(400)
            .json({message:" Admin not Authorized"})
        }
    }
    
    if(!token){
        res.status(401)
        .json( {message: "No token , Admin not Authorized"})
    }
})


