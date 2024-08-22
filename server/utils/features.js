import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const cookieOptions = {
  maxAge: 15*24*60*60*1000,
  sameSite:"none",
  htttOnly: true,
  secure:true,

}


const connectDB = (uri)=>{
   mongoose.connect(uri,{dbName:"kpchat"}).then((data)=>{
    console.log(`Connected to DB: ${data.connection.host}`)
   })
    .catch((err)=>{
      throw err;
    })
   
}

const sendToken = (res,user,code,message)=>{
  const token = jwt.sign(
    { _id: user._id },  // Payload (e.g., user ID)
    process.env.JWT_SECRET,  // Secret key from environment variables
    { expiresIn: '15d' }     // Token expiration time
  );

 

    return res.status(code).cookie("kp-token",token,cookieOptions).json({
       success:true,
       message,
    })
}


const emitEvent = (req,event,users,data)=>{
    console.log("Emitting event",event);
}


export {connectDB,sendToken,cookieOptions,emitEvent};