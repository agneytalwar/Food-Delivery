//Library
import express from 'express'

//Models
import {UserModel} from '../../database/user/index'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Router=express.Router();


// Route:      /auth/signup
// Desc:       Register New user
// Params:     none
// Access:     Public
// Method:     POST

Router.post("/signup",async(request,response)=>{
    try{
        //const {fullname,email,phoneNumber,password}=request.body.credentials
        
        await UserModel.findByEmailAndPhone(request.body.credentials);

        //hash password
        // const bcryptSalt  = await bcrypt.genSalt(8);
        // const hashedPassword = await bcrypt.hash(password,bcryptSalt)

        //save to DB
        //await UserModel.create({...request.body.credentials,password:hashedPassword})
        const newUser= await UserModel.create(request.body.credentials)

        //generate JWT auth token
        // const token =jwt.sign({user:{fullname,email}},"ZomatoApp")
        const token = newUser.generateJWTToken()

        return response.status(200).json({token,status:"success"})

    }catch(error){
        return response.status(500).json({error:error.message})
    }
})


// Route:      /auth/signin
// Desc:       Sign in user using email and password
// Params:     none
// Access:     Public
// Method:     POST
Router.post("/signin",async(request,response)=>{
    try{
        const user= await UserModel.findByEmailAndPassword(request.body.credentials)
        const token=user.generateJWTToken()
        return response.status(200).json({token,status:"success"})

    }catch(error){
        return response.status(500).json({error:error.message})
    }
})


export default Router;