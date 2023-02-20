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
postRoutes.delete("/delete/:id",async(req,res)=>{
    try{
        await postmodel.findByIdAndDelete({_id:req.params.id})
        res.send("delete done")
    }catch(error){
        res.send(error)
    }
})
postRoutes.patch("/update/:id",async(req,res)=>{
    try{
        await postmodel.findByIdAndDelete({_id:req.params.id},req.body)
        res.send("update done")
    }catch(error){
        res.send(error)
    }
})


module.exports={
    postRoutes
}

