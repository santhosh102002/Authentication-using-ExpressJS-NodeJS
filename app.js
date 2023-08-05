require('dotenv').config()
const express = require('express');
const authRouter = require('./routers/authRouter')
const dbConnect = require('./Config/AuthDBConfig')
const app = express()

dbConnect()

app.use(express.json())

app.use('/auth/api',authRouter)
app.use('/',(req,res)=>{
    res.status(200).json({
        success: true,
        message: "The router connected successfully"
    })
})



module.exports = app
