
const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {usermodel}=require("../model/usermodl")
const { error } = require("console")
const userRoutes=express.Router()
userRoutes.use(express.json())

userRoutes.post("/register",(async(req,res)=>{
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

userRoutes.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await usermodel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(error,result)=>{
                if(result){
               let token=jwt.sign({user:user[0]._id},"Backend")
                 res.send({"msg":"login successfull","token":token})
                }else{
                    res.send("wrong data")
                }
            })
        }
       
    }catch{error}{
        res.send(error.message)
    }
})


module.exports={
    userRoutes
}