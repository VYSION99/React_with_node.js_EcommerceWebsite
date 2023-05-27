//=> REQUESTING DEPENDENCIES
import express from "express";

//=> REQUESTING NODE MODULES
import { getUser,RegisterUser,updateUser , UserLogin,} from "../controllers/userControllers.js";
import { protectRoute } from "../middleware/authMiddleware.js";
const UserRouter = express.Router();

//=> controlling Route
UserRouter.route('/').get( protectRoute, getUser).post(RegisterUser);
UserRouter.route('/login').post(UserLogin)
UserRouter.route('/update').put(updateUser)

UserRouter.get('*',(req,res,next)=>{
console.log( 'page not found')
})  






export default UserRouter