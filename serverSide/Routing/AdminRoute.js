//=> REQUESTING DEPENDENCIES
import express from "express"


//=> RQUESTING MODULES
import {setAdmin, updateAdmin,LogAdmin,getAdmin} from "../controllers/adminControllers.js"
import { ImagesHandler, ProductHandler } from "../controllers/ProductControllers.js";
import { protectAdminRoute } from "../middleware/authMiddleware.js";



 const AdminRouter = express.Router();
AdminRouter.route("/").post(setAdmin)
AdminRouter.route("/product").get(getAdmin)
AdminRouter.route("/products/").post(protectAdminRoute,ProductHandler);
AdminRouter.route("/").put(updateAdmin);
AdminRouter.route("/Log").post(LogAdmin);
AdminRouter.route("/image").post(ImagesHandler);






export default AdminRouter    