const express = require('express');

const authRouter = express.Router();
const {signup,signin, getUser,logout} = require('../controllers/authController') 
const jwtAuth  = require('../middleware/jwtAuthMiddleware')


authRouter.post('/signup',signup)
authRouter.post('/signin',signin)
authRouter.get('/user',jwtAuth,getUser)
authRouter.get('/logout',jwtAuth,logout)

module.exports = authRouter