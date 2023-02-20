const express=require("express")

const postRoutes=express.Router()
postRoutes.use(express.json())
const {postmodel}=require("../model/instamodel")


postRoutes.post("/posts",async(req,res)=>{
    try{
        const allpost=await postmodel.find()
        res.send(allpost)
    }catch(error){
        res.send("error")
    }
})


