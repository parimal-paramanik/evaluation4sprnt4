
const express = require("express")
const {UserRoutes} = require("./Routes/userRoute")
const {connection}=  require("./config/db")
const {notesRouter} = require("./Routes/notes")
const {validator} = require("./middleware/middleware")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.use("/users",UserRoutes)
app.use(validator)
app.use("/posts",notesRouter)
app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to atlas")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is awake at  ${process.env.port}`)
})
