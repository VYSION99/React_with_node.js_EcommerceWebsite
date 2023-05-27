import nodemailer from  'nodemailer'


  //=> Sending admin email
  
 


  const Transpoter = nodemailer.createTransport({
        host :"smtp.gmail.com",
        port: "465",
        secure :"true",
   auth:{
       user:'kwesivy@gmail.com',
       pass:"hzpuanthnvkmowic"
   }
})

export const Emailer =async (Email,AdminId,res)=>{




   var  MailOptions = {
       from:' "Online Super Market (OSM)" codecamps <kwesivy@gmail.com>',
       to: Email,
       subject:"Your AdminID Verification Code",
       text: ` ${AdminId}\n\n
       Your acount can not be accessed without this verifications code. \n 
       to keep your account secure , we recommend using a unique password from  Your OSM  Account.
       OSM Account access' two-factor  authenticatin makes it easier , 
       without needing to remember or change passowrd.
       `
       }


await Transpoter.sendMail(MailOptions ,(error,info)=>{
   if(error){
       return res.status(400).json({msg:"please you are not connected to the internet"})
   }
  return res.status(200).json({msg:"we sent you an OTP via your Email"})
  boster = true ;

});

}