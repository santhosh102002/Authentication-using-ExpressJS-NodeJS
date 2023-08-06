const express = require('express');

const authRouter = express.Router();
const {signup,signin,user} = require('../controllers/authController') 
const jwtAuth  = require('../middleware/jwtAuthMiddleware')


authRouter.post('/signup',signup)
authRouter.post('/signin',signin)
authRouter.get('/user',jwtAuth,user)

module.exports = authRouter