import express from 'express';
import { acceptFriendRequest, getMyNotifications, getMyProfile, login, logout, newUser,searchUser, sendFriendRequest,getMyFriends  } from '../controllers/user.js';
import { singleAvatar } from '../middlewares/multer.js';
import { isAuthenticated } from "../middlewares/auth.js";
import { acceptRequestValidator, loginValidator, registerValidator,sendRequestValidator,validateHandler} from '../lib/validators.js';

const app = express.Router();

const cookieOptions = {
  maxAge: 15*24*60*60*1000,
  sameSite:"none",
  htttOnly: true,
  secure:true,

}

// Route to create a new user, with avatar upload middleware
app.post("/new", singleAvatar, registerValidator(), validateHandler, newUser);

// Route to log in a user
app.post("/login", loginValidator(), validateHandler, login);




// Route to get the profile of the logged-in user, protected by authentication middleware
app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.get("/logout",logout);

app.get("/search",searchUser);

app.put(
  "/sendrequest",
  sendRequestValidator(),
  validateHandler,
  sendFriendRequest
);


app.put(
  "/acceptrequest",
  acceptRequestValidator(),
  validateHandler,
  acceptFriendRequest
);

app.get("/notifications", getMyNotifications);

app.get("/friends", getMyFriends);



export default app;
