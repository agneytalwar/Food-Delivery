//Libraries
import express, { request } from 'express'
const Router=express.Router()

//Database Model
import {RestaurantModel} from '../../database/allModels'
// import {RestaurantModel} from '../../database/restaurant/index'

//validation
import {ValidateRestaurantCity,ValidateSearchString} from '../../validation/restaurant'
import {ValidateRestaurantId} from '../../validation/food'

// Route:      /restaurant
// Desc:       Get all restaurant details filtered by city
// Params:     none(we will use queries)
// Access:     Public
// Method:     GET
// eg: http:/localhost:4000/restaurant/?city=ncr
Router.get("/",async(request,response)=>{
    try{
        await ValidateRestaurantCity(request.query)
        const {city}=request.query
        const restaurants= await RestaurantModel.find({city});

        return response.json({restaurants})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

// Route:      /restaurant
// Desc:       Get restaurant details for a specific restaurant(based on id)
// Params:     id
// Access:     Public
// Method:     GET
Router.get("/:_id",async  function(request,response){
    try{
        await ValidateRestaurantId(request.params)
        const {_id}=request.params
        const reqdRestaurant=await RestaurantModel.findById(_id)
        if(!reqdRestaurant){
            return response.status(404).json({error:"Restaurant not found"})
        }
        return response.json({reqdRestaurant})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

// Route:      /restaurant/search
// Desc:       Get restaurant details for restaurants(based on search string)
// Params:     none
// body:       item to be searched        
// Access:     Public
// Method:     GET
Router.get("/search",async (request,response)=>{
    try{
        await ValidateSearchString(request.body)
        const {searchString}= request.body
        const restaurants= await RestaurantModel.find({
            name:{ $regex:searchString , $options:"i"}
        })
        if(!restaurants){
            return response.status(404).json({error: `No restaurants found with ${searchString}`})
        }
        return response.json({restaurants})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})
export default Router;