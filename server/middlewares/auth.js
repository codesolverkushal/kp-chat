import { adminSecretKey } from "../app.js";
import { ErrorHandler } from "../utils/utility.js";
import jwt from 'jsonwebtoken';
import { TryCatch } from "./error.js";
import { KP_TOKEN } from "../constants/config.js";


const isAuthenticated = TryCatch((req,res,next)=>{
  const token = req.cookies[KP_TOKEN];
 
 
  if(!token) return next(new ErrorHandler("please login to access this route", 401));


  const decodedData = jwt.verify(token,process.env.JWT_SECRET);

  if (decodedData.id) {
      decodedData._id = decodedData.id;
      delete decodedData.id;
  }

  req.user = decodedData._id;

 

  next();
});


const adminOnly = (req, res, next) => {
    const token = req.cookies["admin-token"];
  
    if (!token)
      return next(new ErrorHandler("Only Admin can access this route", 401));
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const secretKey = decodedData.secretKey;

    
    const isMatched = secretKey === adminSecretKey;
  
    if (!isMatched)
      return next(new ErrorHandler("Only Admin can access this route", 401));
  
    next();
  };

export {isAuthenticated,adminOnly};