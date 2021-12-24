//Libraries
import express from 'express'
// import AWS from 'aws-sdk'
import multer from 'multer'


//Database model
import {ImageModel} from '../../database/allModels'

//upload to s3
import {s3Upload} from '../../Utils/AWS/s3'

const Router=express.Router()

//multer config
const storage=multer.memoryStorage()
const upload =multer({storage})

// //AWS s3 bucket
// const s3Bucket= new AWS.S3({
//     accessKeyId: process.env.AWS_S3_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_S3_SECRET_KEY,
//     region: 'ap-south-1'
// })

// Route:      /image
// Desc:       Uploads given image to S3 bucket and save file link to mongodb
// Params:     none
// Access:     Public
// Method:     POST
Router.post("/",upload.single('file'), async(request,response)=>{
    try{
        const file= request.file

        //s3 bucket options
        const bucketOptions={
            Bucket:"grublub-bucket",
            Key : file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL:"public-read"//Access Control List
        }
        // const s3Upload = (options) =>{
        //     return new Promise((resolve,reject)=> s3Bucket.upload(options,(error,data)=>{
        //         if(error) return reject(error)
        //         return resolve(data)
        //     }))
        // }

        const uploadImage= await s3Upload(bucketOptions)

        return response.status(200).json({uploadImage})

    }catch(error){
        return response.status(500).json({error:error.message})
    }
})
export default Router