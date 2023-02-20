const express = require("express")
const  notesRouter = express.Router()
const {NotesModel} = require("../Model/notesModel")
notesRouter.use(express.json())

notesRouter.post("/newpost", async(req,res)=>{
    try{
    const newpost = new NotesModel(req.body)
      await newpost.save()
      res.send("Notes Added")
         
    }catch(error){
      res.send("error")
    }
})
notesRouter.get("/allpost", async(req,res)=>{
  try{
    const posts = await NotesModel.find()
    res.send(posts)
  }catch(error){
    res.send(error.message)
  } 

})

notesRouter.delete("/delete/:id", async(req,res)=>{
  try{
      await NotesModel.findByIdAndDelete({_id:req.params.id})
      res.send("Delete done")
  }catch(error){
      res.send(error)
  }
})
notesRouter.patch("/update/:id", async(req,res)=>{
    try{
        await NotesModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send("Update done")
    }catch(error){
        res.send(error)
    }
})

module.exports={
    notesRouter
}