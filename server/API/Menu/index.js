//Libraries
import express from 'express'

const Router=express.Router()

//Database Models
import {MenuModel,ImageModel} from '../../database/allModels'

// Route:      /menu/list
// Desc:       Given an id get the menu 
// Params:     _id
// Access:     Public
// Method:     GET
Router.get("/list/:_id",async function(request,response){
    try
    {
        const {_id}=request.params
        const reqdmenu=await MenuModel.findById(_id)
        return response.json({reqdmenu})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

// Route:      /menu/image
// Desc:       Given all menu images based on id 
// Params:     _id
// Access:     Public
// Method:     GET
Router.get("/image/:_id",async function(request,response){
    try
    {
        const {_id}=request.params
        const reqdmenu=await ImageModel.findOne(_id)
        return response.json({reqdmenu})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})
export default Router;