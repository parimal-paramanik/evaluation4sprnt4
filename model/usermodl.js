const mongoose = require("mongoose")
const express= require("express")
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true }

})

const usermodel=mongoose.model("user",userSchema)
module.exports={
    usermodel
}