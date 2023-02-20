
const mongoose = require("mongoose")
const express= require("express")
const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    no_if_comments: { type: Number, required: true },
    device: { type: String, required: true }
})

const postmodel=mongoose.model("insta",postSchema)
module.exports={
    postmodel
}