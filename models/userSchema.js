const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"User name is required"],
        trim :true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase:true
    },
     password:{
        type:String,
        required:true,
        minLength:10,
        select: false
     },
     forgotPasswordToken:{
        type:String
     },
     forgotPasswordExpiryDate:{
        type:String
     }
},{timestamps: true});
userSchema.methods = {
    jwtToken(){
       return jwt.sign({id: this._id,email: this.email},
         process.env.SECRET,
         {expiresIn: '24h'})
    }
}

const userModel = mongoose.model('User',userSchema)
module.exports  = userModel;