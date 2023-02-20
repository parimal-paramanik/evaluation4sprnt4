
const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {usermodel}=require("../model/usermodl")
const { error } = require("console")
const userRoutes=express.Router()
userRoutes.use(express.json())

userRoutes.post("register",(async(req,res)=>{
    const {name,email,password,gender,age,city}=req.body
    try{
        bcrypt.hash(password,6,async(error,hash)=>{
      if(error){
        res.send(error.message)
      }else{
        const user= new usermodel({name,email,password:hash})
        await user.save()
      }
        })
    }catch(error){
        res.send({"msg":"something went wrong","error":error.message})

    }
}))