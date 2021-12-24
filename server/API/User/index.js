//Libraries
import express, { request, response } from 'express'

//Database models
import {UserModel} from '../../database/allModels'

const Router=express.Router()

// Route:      /user/:_id
// Desc:       Get user data by id
// Params:     _id
// Access:     Public
// Method:     GET
Router.get("/:_id",async (request,response)=>{
    try{
        const {_id}=request.params

        const getUser= await UserModel.findById(_id)
        if(!getUser){
            return response.status(404).json({error:"User not found"})
        }
        return response.status(200).json({user : getUser})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})
// Route:      /user/update/:userid
// Desc:       Update user data by id
// Params:     userid
// Access:     Public
// Method:     PUT
Router.put("/update/:userid",async(request,response)=>{
    try{
        const {userid}=request.params
        const {userData}=request.body
        const updateUserData = await UserModel.findByIdAndUpdate(userid
            ,
            {
                $set : userData
            },{
                new:true
            })
            return response.json({user:updateUserData})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})
export default Router