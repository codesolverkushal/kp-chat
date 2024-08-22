import { compare } from "bcrypt";
import { cookieOptions, sendToken } from "../utils/features.js";
import { User } from "./../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import {ErrorHandler} from "../utils/utility.js"
// Create a new user and save it to the database and save in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "sdfsd",
    url: "asdfd",
  };
  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User Created");
};

// Login User and Save token in cookie...

const login =TryCatch(async (req, res, next) => {
 
    const { username, password } = req.body;

    // Find user by username and include password in the result
    const user = await User.findOne({ username }).select("+password");

    // Check if user exists
    if (!user) {
      return next(new ErrorHandler("Invalid Username or password",404));
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await compare(password, user.password);

    // If password does not match, return error
    if (!isMatch) {
      return next(new ErrorHandler("Invalid username and password",404));
    }

    // Send token if credentials are valid
    sendToken(res, user, 200, `Welcome Back, ${user.name}`);
  
});

const getMyProfile = TryCatch(async (req, res) => {
  
  const user = await User.findById(req.user);
  res.status(200).json({
    success: true,
    user,
  })
})
const logout = TryCatch(async (req, res) => {
  
return  res.status(200).cookie("kp-token","",{...cookieOptions,maxAge:0}).json({
    success: true,
    message:"Logged out successfully!" 
  })
})
const searchUser = TryCatch(async (req, res) => {
  const {name} = req.query;

return  res.status(200).json({
    success: true,
    message:name 
  })
})


export { login, newUser, getMyProfile,logout,searchUser };
