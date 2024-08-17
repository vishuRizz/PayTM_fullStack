const express = require('express')
const router =  express.Router()
const jwt = require('jsonwebtoken')
router.use(express.json())
const zod = require('zod')
const User = require('../db/db')
const JWT_SECRET = require('../config')
const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})
router.use('signup', async(req, res)=>{
const {success} = signupBody.safeParse(req.body);
if(!success){
   return res.status(400).json({
        message: "your input type is wrong"
    })
}
const ifExistingUser = await User({
    username: req.body.username,
})
if(ifExistingUser){
    return res.status(400).json({
        message: "user already exists"
    })
}
const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
})
const userId = user._id;
const token = jwt.sign({
    userId,
}, JWT_SECRET)

res.json({
    message: "user created succesfully",
    token: token,
})


})

module.exports =  router;