import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const UserSchema= new mongoose.Schema({
    fullname:{type:String , required:true},
    email: {type:String , required:true},
    password:{type:String},
    address:[{details:{type:String},for:{type : String}}],
    phoneNumber:[{type:Number}]
},{
    timestamps:true
})

//Statics and Methods
UserSchema.methods.generateJWTToken = function () {
    return jwt.sign({user : this._id.toString()},"ZomatoAPP")

}


UserSchema.statics.findByEmailAndPhone = async({email,phoneNumber})=>{
    const checkUserByEmail= await UserModel.findOne({email})
    const checkUserByPhoneNumber= await UserModel.findOne({phoneNumber})
    //checking whether email exists
    if(checkUserByEmail ){
        throw new Error( "User with same E-mail already exists!!")
    }
    //checking whether Phone Number already exists
    if(checkUserByPhoneNumber ){
        throw new Error("User with same Phone Number already exists!!") 
    }
    return false;
}

UserSchema.statics.findByEmailAndPassword = async({email,password})=>{
    const user= await UserModel.findOne({email})

    //check whether a user is registered with provided mail id
    if(!user){
        throw new Error("We cannot find an account with that email address")
    }
    
    //check if given password matches with password in database
    const doesPasswordMatch = await bcrypt.compare(password,user.password)
    if(!doesPasswordMatch){
        throw new Error("Invalid password. Please try again")
    }

    return user;
}

UserSchema.pre("save",function(next){
    const user=this;

    //password is modified i.e. is not empty
    if(!user.isModified("password")){
        return next()
    }

    //password bcrypt salt
    bcrypt.genSalt(8, (error,salt)=>{
        if(error){
            return next(error);
        }
        //hash the password
        bcrypt.hash(user.password,salt,(error,hashedPassword)=>{
            if(error){
                return next(error)
            }

            //assign the userpassword with hashed password
            user.password=hashedPassword
            return next()
        })
    })
})


export const UserModel = mongoose.model('Users',UserSchema)