//=> REQUESTING DEPENDENCIES
import express from "express"


//=> RQUESTING MODULES
import {setAdmin, updateAdmin, getAdmin,LogAdmin} from "../controllers/adminControllers.js"
import { ProductHandler } from "../controllers/ProductControllers.js";
import { protectAdminRoute } from "../middleware/authMiddleware.js";


 const AdminRouter = express.Router();
AdminRouter.route("/").post(setAdmin).get(protectAdminRoute, getAdmin)
AdminRouter.route("/products/").post(protectAdminRoute,ProductHandler);
AdminRouter.route("/").put(updateAdmin);
AdminRouter.route("/Log").post(LogAdmin);



export default AdminRouter  