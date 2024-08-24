import express from 'express';
import { connectDB } from './utils/features.js';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser';


import userRoute from './routes/user.js'; 
import chatRoute from './routes/chat.js';
import adminRoute from './routes/admin.js';
// import { createGroupChats, createSingleChats,createUser,createMessagesInAChat } from './seeders/user.js';




dotenv.config({
    path:"./.env"
})

const mongoURI = process.env.MONGO_URI
const port = process.env.PORT || 3000;

connectDB(mongoURI);

// createUser(10);
// createSingleChats(10);
// createGroupChats(10);

// createMessagesInAChat("66c7817e3129e4040093c857",50);

export const adminSecretKey = process.env.ADMIN_SECRET_KEY || "codesolverkushal";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/user',userRoute);
app.use("/chat",chatRoute);
app.use("/admin",adminRoute);
app.get("/",(req,res)=>{

    res.send("Home Route!");
})

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})