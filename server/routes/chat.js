import express from 'express';
import { isAuthenticated } from "../middlewares/auth.js";
import { getMyChat, getMyGroups, newGroupChat } from '../controllers/chat.js';
const app = express.Router();





app.use(isAuthenticated);

app.post("/new",newGroupChat);

app.get("/my",getMyChat);

app.get("/my/groups",getMyGroups);

app.put("addmembers")

export default app;
