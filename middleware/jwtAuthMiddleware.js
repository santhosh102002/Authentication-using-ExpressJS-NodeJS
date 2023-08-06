const jwt = require('jsonwebtoken')


const jwtAuth = (req,res,next)=>{


    const token = (req.cookies && req.cookies.token)  || null;
    if(!token){
        res.status(400).json({
            success: true,
            message: "You are not authorized"
        })
    }
    next()

}

module.exports = jwtAuth