const userModel = require('../models/userSchema')



exports.signup = async (req,res)=>{

const {name,email,password} = req.body;
try{
    const userInfo = userModel(req.body)
    const result = await userInfo.save();
    return res.status(200).json({
        sucess:true,
        data: result
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