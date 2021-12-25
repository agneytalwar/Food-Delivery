//Library
import express from "express";
import passport from "passport";

//Models
import { UserModel } from "../../database/user/index";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//validation
import {ValidateSignin,ValidateSignup} from '../../validation/auth'

const Router = express.Router();

// Route:      /auth/signup
// Desc:       Register New user
// Params:     none
// Access:     Public
// Method:     POST

Router.post("/signup", async (request, response) => {
  try {
    //const {fullname,email,phoneNumber,password}=request.body.credentials
    await ValidateSignup(request.body.credentials)
    await UserModel.findByEmailAndPhone(request.body.credentials);

    //hash password
    // const bcryptSalt  = await bcrypt.genSalt(8);
    // const hashedPassword = await bcrypt.hash(password,bcryptSalt)

    //save to DB
    //await UserModel.create({...request.body.credentials,password:hashedPassword})
    const newUser = await UserModel.create(request.body.credentials);

    //generate JWT auth token
    // const token =jwt.sign({user:{fullname,email}},"ZomatoApp")
    const token = newUser.generateJWTToken();

    return response.status(200).json({ token, status: "success" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

// Route:      /auth/signin
// Desc:       Sign in user using email and password
// Params:     none
// Access:     Public
// Method:     POST
Router.post("/signin", async (request, response) => {
  try {
    await ValidateSignin(request.body.credentials)
    const user = await UserModel.findByEmailAndPassword(
      request.body.credentials
    );
    const token = user.generateJWTToken();
    return response.status(200).json({ token, status: "success" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

// Route:      /auth/google
// Desc:       Route for google authentication
// Params:     none
// Access:     Public
// Method:     GET
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

// Route:      /auth/google/callback
// Desc:       google callback function
// Params:     none
// Access:     Public
// Method:     GET
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (request, response) => {
         return response.json({token: request.session.passport.user.token})
    //   return response.redirect(`http://localhost:4000/google/${request.session.passport.user.token}`)
})


export default Router;
