import express from 'express';
import {adminLoginValidator, validateHandler} from "./../lib/validators.js";
import { adminLogin, adminLogout, allChats, allMessages, allUsers, getAdminData, getDashboardStats } from '../controllers/admin.js';
import { adminOnly } from '../middlewares/auth.js';


const app = express.Router();

app.post("/verify",adminLoginValidator(),validateHandler,adminLogin)
app.get("/logout", adminLogout);


// These api only access by the admin only...

app.use(adminOnly);

app.get("/", getAdminData);

app.get("/users", allUsers);
app.get("/chats", allChats);
app.get("/messages", allMessages);

app.get("/stats", getDashboardStats);




export default app;