import express from 'express';
import { getMyProfile, login, logout, newUser,searchUser } from '../controllers/user.js';
import { singleAvatar } from '../middlewares/multer.js';
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

const cookieOptions = {
  maxAge: 15*24*60*60*1000,
  sameSite:"none",
  htttOnly: true,
  secure:true,

}

// Route to create a new user, with avatar upload middleware
app.post("/new", singleAvatar, newUser);

// Route to log in a user
app.post("/login", login);




// Route to get the profile of the logged-in user, protected by authentication middleware
app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.get("/logout",logout);

app.get("/search",searchUser)
// Export the router to be used in the main application
export default app;
