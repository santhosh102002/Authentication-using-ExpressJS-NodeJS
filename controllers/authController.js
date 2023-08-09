const userModel = require('../models/userSchema')
const emailvalidator = require('email-validator')


exports.signup = async (req,res)=>{
    const {name,email,password,confirmpassword} = req.body

try{
    // const {name,email,password} = req.body;
    const userInfo = userModel(req.body)
    
    if(!name || !email || !password || !confirmpassword){
        throw new Error('Name, email, password, confirmpassword are required')

    }
    if(password!==confirmpassword){
        throw new Error('Password and confirmpassword are not same')
    }
    var emailvalid = emailvalidator.validate(email)
    if(!emailvalid){
        throw new Error('Enter valid email')
    }

    const result = await userInfo.save();  // save to mongodb
    
    return res.status(200).json({
        sucess:true,
        data: "yes"
    })
}
catch(err){
    if(err.code === 11000){
        return res.status(400).json({
            sucess:false,
            message: "The accound already exists"
        })

    }
    return res.status(400).json({
        sucess:false,
        message: err.message
    })

}
}

exports.signin = async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        throw new Error("please enter email and password")
    }
    try{
        const user = await userModel.findOne({
            email
        }).select('+password')
        
        if(!user || password!== user.password){
            throw new Error('Please enter valid mail and password')
        }
       
        const token = user.jwtToken();
        user.password = undefined;
        cookieOptions = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        }

        res.cookie("token",token,cookieOptions)
        res.status(200).json({
            sucess: true,
            message: 'signin is sucessfull'
        })

    }
    catch(err){
        res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

exports.getUser = async(req,res)=>{
    
    const userId = req.user.id;
    try{
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success: true,
            message:  user
        })
    
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}