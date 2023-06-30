//=> REQUESTING DEPENDENCIES
import express from "express";
import cors from 'cors';
import morgan from "morgan"
import helmet from "helmet"
import compression from "compression"
import bodyParser from "body-parser";


//=> REQUESTING MODULES
import UserRouter from "./Routing/UserRoute.js";
import AdminRouter from  "./Routing/AdminRoute.js"



 const app = express();
 //app.enable('trust proxy') 
//app.use(express.static(path.resolve(__dirname,'..', 'client','build')));
 
app.use(compression())
app.use(helmet())
app.use(cors())
if(process.env.NODE_ENV == "development"){app.use(morgan("dev"))}

app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb' , extended:true}))

app.use('/api/v1/user/' , UserRouter);
app.use('/api/v1/Admin/', AdminRouter);
//app.use('/api/v1/', ProductRouter);





export default app