//Libraries
import express from 'express'
import passport from 'passport'

//Database models
import {OrderModel} from '../../database/allModels'

const Router=express.Router()

// Route:      /order/:_id
// Desc:       Get all orders based on id of user
// Params:     _id
// Access:     Public
// Method:     GET
Router.get("/:_id", passport.authenticate('jwt',{session : false}) ,async (request,response)=>{
    try{
        const {_id}=request.params
        const orders= await OrderModel.findOne({user:_id})
        if(!orders){
            return response.status(404).json({error:"User not found"})
        }
        return response.status(200).json({orders})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

// Route:      order/new/:_id
// Desc:       Place new order for user with given id
// Params:     _id
// Access:     Public
// Method:     POST
Router.post("/new/:_id",passport.authenticate('jwt',{session:false}) ,async(request,response)=>{
    try{
        const {_id}=request.params
        
        const {orderDetails}=request.body

        const addNewOrder = await OrderModel.findOneandUpdate({
            user:_id
        },{
            $push : {orderDetails: orderDetails},
        },{
            new:true
        })
        return response.json({order: addNewOrder})
    }catch(error){
        return response.status(500).json({error:error.message})
    }
})

export default Router