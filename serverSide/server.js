import mongoose from "mongoose"
 
//==> CATHCING UNCAUGHT EXPECTION ERRORS
process.on('uncaughtException', err => {
    console.log('uncaught expections Shutting down..',err)

    process.exit(1);
})

import dotenv from "dotenv";
dotenv.config( {path : `./config/.env`})



//=> REQUESTING MODULES 
import app from './app.js'

//=> connecting to the database nd starting the server
 const port = process.env.Port || 5000

mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
} ).then(()=> {

app.listen(port, ()=>{  
    try {
        console.log(`my server is running in ${process.env.NODE_ENV} mode on Port ${port} \n with database acess`)
    } catch (error) {
        console.log(error)
    }
})  
}).catch(err => console.log(err, "Database connection erorr"))

process.on('unhandledRejection', err=>{
    console.log(' unhandle rejection! shutting down',err)
    server.close( ()=> {
        process.exit(1);
    })
})

process.on('SIGTERM',()=>{
    console.log('SIGTERM RECEIVED! shuting down')
    server.close( ()=>{
        console.log(`process teminated`)
    })
})
