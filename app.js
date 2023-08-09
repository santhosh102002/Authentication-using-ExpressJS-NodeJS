
const express = require('express');
const authRouter = require('./routers/authRouter')
const dbConnect = require('./Config/AuthDBConfig')
const app = express()
const cookieParser = require('cookie-parser')

dbConnect()

app.use(cookieParser())

app.use(express.json())
require('dotenv').config()

app.use('/auth/api',authRouter)
app.use('/',(req,res)=>{
    res.status(200).json({
        success: true,
        message: "The router connected successfully"
    })
})



module.exports = app
