//=> REQUESTING DEPENDENCIES
import express from "express";
import cors from 'cors';
import morgan from "morgan"
import helmet from "helmet"
import compression from "compression"
import bodyParser from "body-parser";
import {join, resolve,dirname} from "path"


//=> REQUESTING MODULES
import UserRouter from "./Routing/UserRoute.js";
import AdminRouter from  "./Routing/AdminRoute.js"
import { fileURLToPath } from "url";





// Get the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the directory name using the path module


 const app = express();
 app.enable('trust proxy') 
app.use(express.static(resolve(dirname('..', 'client','build'))));
app.use(compression())
app.use(helmet())
app.use(cors())
if(process.env.NODE_ENV == "development"){app.use(morgan("dev"))}

app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb' , extended:true}))
const folderFood = join(__dirname,"/Gallary/Images/Food")
const folderFashion = join(__dirname,"/Gallary/Images/Fashion")
const folderTechnology = join(__dirname,
  "/Gallary/Images/Technology/"
);
app.use(express.static(folderFashion))
app.use(express.static(folderFood))
app.use(express.static(folderTechnology))
//app.use(foodData)
app.use('/api/v1/user/' , UserRouter);
app.use('/api/v1/Admin/', AdminRouter);


   


export default app  