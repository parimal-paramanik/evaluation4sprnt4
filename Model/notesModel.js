const mongoose = require("mongoose")
const express=require("express")

const NoteSchema = mongoose.Schema({
    Title: { type: String, required: true },
    body: { type: String, required: true },
    Author: { type: String, required: true }
})

const NotesModel = mongoose.model("note", NoteSchema)

module.exports = {
    NotesModel
}