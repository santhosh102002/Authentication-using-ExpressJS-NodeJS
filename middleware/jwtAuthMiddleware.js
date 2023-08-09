const jwt = require('jsonwebtoken')
require('dotenv').config()


const jwtAuth = (req,res,next)=>{
    // verify token
    // inject user info in req

    const token = (req.cookies && req.cookies.token)  || null;
    if(!token){
        res.status(400).json({
            success: true,
            message: "You are not authorized"
        })
    }
    try{
        const payload = jwt.verify(token,process.env.SECRET);
        req.user = {id:payload.id, email:payload.email}

    }
    catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
    next()

}

module.exports = jwtAuth