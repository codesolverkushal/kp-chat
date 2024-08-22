import { ErrorHandler } from "../utils/utility.js";

import jwt from 'jsonwebtoken';


const isAuthenticated = (req,res,next)=>{
    const token = req.cookies["kp-token"];
    if(!token) return next(new ErrorHandler("please login to access this route", 401));

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    if (decodedData.id) {
        decodedData._id = decodedData.id;
        delete decodedData.id;
    }

    req.user = decodedData._id;

   

    next();
}

export {isAuthenticated};