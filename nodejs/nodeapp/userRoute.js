
// import express from 'express'



// const Router = express.Router()

// Router.get("/show",(req,res)=>{
//     res.send("Show User")
// })



// Router.post("/register",(req,res)=>{
//     res.send("Register")
// })

// Router.post("/login",(req,res)=>{
//     res.send("Login Sucess")
// })

// export default Router;


/////////////////////////////////////////////////////////


import express from "express";
import { authenticate, authorize } from "./auth.js";
const Router = express.Router();
import {
  register,
  login,
  profile,
  updateUser,
  deleteUser,
  showUsers,
} from "./userController.js";
Router.post("/register", register);
Router.post("/login", login);
Router.get("/showusers", authenticate, authorize("admin"), showUsers);
Router.patch("/:id", authenticate, authorize("admin"), updateUser);
Router.delete("/:id", authenticate, authorize("admin"), deleteUser);
Router.get("/:id/profile", authenticate, profile);
export default Router;