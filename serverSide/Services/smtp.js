import nodemailer from  'nodemailer'
import dotenv from 'dotenv'
dotenv.config( {path : `./config/.env`})

  //=> Sending admin email
  const Transpoter = await nodemailer.createTransport({
        host :"smtp.gmail.com",
        port: "465",
        secure :"true",
   auth:{
       user:process.env.email_name,
       pass:process.env.email_secret,
   },
   from:"kwesivy@gmail.com"
})
 

export const Emailer =async (Email,AdminId,res)=>{
 
   var  MailOptions = {
       from:'(OSM)  Super Store  codecamps <kwesivy@gmail.com>',
       to: Email,
       subject:"Your  Verification Code AdminID",
       text: `AdminID : ${AdminId}\n
       Your acount can not be accessed without this verifications code. \n 
       to keep your account secure , we recommend using a unique password from  Your OSM  Account.
       OSM Account access' two-factor  authenticatin makes it easier , 
       without needing to remember or change passowrd.
       `
       }
 Transpoter.sendMail(MailOptions ,(error,info)=>{
   if(error){
       return res.status(400).json({msg:"connection failed 0r invalid email"})
   }
  return res.status(200).json({msg:"we sent you a login _id via your Email"})

});

}
export const UseEmailer =async (Email,AdminId,res)=>{
 
   var  MailOptions = {
       from:'(OSM)  Super Store  codecamps <kwesivy@gmail.com>',
       to: Email,
       subject:"Please comfirm the link to Reset Password",
       html: `
       <h2>Your Password reset link has been initialized </h2>
        <p>to reset your Password successfully click on the link below</p>
        <a href="${AdminId}"><button type ="link" > Reset Password</button> </a>
       `
       }
 Transpoter.sendMail(MailOptions ,(error,info)=>{
   if(error){
       return res.status(400).json({msg:"connection failed 0r invalid email"})
   }
 
   return res.status(200).json({msg:"Kindly check your Email , we sent you a link to reset your Password"})

});

}