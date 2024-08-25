import express from 'express';
import { connectDB } from './utils/features.js';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser';
import {Server} from "socket.io";
import {createServer} from 'http';
import userRoute from './routes/user.js'; 
import chatRoute from './routes/chat.js';
import adminRoute from './routes/admin.js';
import { NEW_MESSAGE } from './constants/events.js';
// import { createGroupChats, createSingleChats,createUser,createMessagesInAChat } from './seeders/user.js';




dotenv.config({
    path:"./.env"
})

const mongoURI = process.env.MONGO_URI
const port = process.env.PORT || 3000;
const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

// createUser(10);
// createSingleChats(10);
// createGroupChats(10);

// createMessagesInAChat("66c7817e3129e4040093c857",50);

const adminSecretKey = process.env.ADMIN_SECRET_KEY || "codesolverkushal";
connectDB(mongoURI);

const app = express();
const server = createServer(app);
const io = new Server(server,{});




app.use(express.json());
app.use(cookieParser());

app.use('/user',userRoute);
app.use("/chat",chatRoute);
app.use("/admin",adminRoute);
app.get("/",(req,res)=>{

    res.send("Home Route!");
})



io.on("connection",(socket)=>{
    console.log("a user connected", socket.id);
    
    socket.on(NEW_MESSAGE,()=>{
        
    })

    socket.on("disconnect",()=>{
        console.log("user disconnected");
    })
})


app.use(errorMiddleware);

server.listen(port,()=>{
    console.log(`Server is running on port ${port} in ${envMode} Mode`);
})


export {
    envMode,
    adminSecretKey
}