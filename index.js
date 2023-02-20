const express= require("express")
const { connection } = require("./config/db")
const app=express()
app.use(express.json())
const {usermodel}=require("./model/usermodl")
const {userRoutes}=require("./Routes/userrouter")

app.get("/home",(req,res)=>{
    res.send("home page welcomes you")
})
app.use("/users",userRoutes)

app.listen(process.env.port,async()=>{
try{
    await connection
    console.log("conected to atlas")
}catch(error){
    console.log("can not connect")
}
console.log(`server is awake at ${process.env.port}` )
})