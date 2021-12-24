//Libraries
import express, { request } from 'express'

//Database models
import {ReviewModel} from '../../database/allModels'

const Router=express.Router()

// Route:      /review/:rid
// Desc:       Get all reviews of a particular restaurant based on id of restaurant
// Params:     rid
// Access:     Public
// Method:     GET
Router.get("/:rid",async (request,response)=>{
    try{
        const {rid}=request.params
        const reviews=await ReviewModel.find({restaurant:rid})
        // if(!reviews){
        //     return response.status(404).json({error:"No reviews found"})
        // }
        return response.status(200).json({reviews})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

// Route:      /review/new
// Desc:       Write a new review for a restaurant
// Params:     NONE(we'll be passing everything in the body)
// BODY:       review object
// Access:     Public
// Method:     POST
Router.post("/new",async(request,response)=>{
    try{
        const {reviewData}=request.body
        await ReviewModel.create({...reviewData})
        return response.status(200).json({review:"Successfully added review"})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})
// Route:      /review/delete/:_id
// Desc:       Delete review 
// Params:     NONE
// BODY:       NONE
// Access:     Public
// Method:     DELETE
Router.delete("/delete/:_id",async (request,response) =>{
    try{
        const {_id}=request.params
        await ReviewModel.findByIdAndDelete(_id)
        return response.json({review:"Review deleted successfully "})
    }
    catch(error){
        return response.status(500).json({error:error.message})
    }
})

export default Router