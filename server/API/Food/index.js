//Libraries
import express from 'express'

const Router=express.Router()

//Database Model
import {FoodModel} from '../../database/allModels'
// import {FoodModel} from '../../database/food/index'

// Route:      food/r/:_id
// Desc:       Get all foods of a particular restaurant
// Params:     _id
// Access:     Public
// Method:     GET
Router.get("r/:_id",async (request,response)=>{
    try{
        const {_id}=request.params
        const foodItems= await FoodModel.find({restaurant : _id})
        if(!foodItems){
            return response.status(404).json({error:"No food items found for particular retaurant"})
        }
        return response.json({foodItems})
    }
    catch(error){
        return response.status(500).json({error:error.message})
    }
})

// Route:      food/c
// Desc:       Get all foods of a particular category
// Params:     category
// Access:     Public
// Method:     GET
Router.get("/c/:category",async (request,response)=>{
    try{
        const {category}=request.params
        const foodOfCategory= await FoodModel.find({category : {$regex: category ,$options: 'i'}}) 
        if(!foodOfCategory){
            return response.status(404).json({error:"No restaurants of specified category found"})
        }
        return response.json({foodOfCategory})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

export default Router;