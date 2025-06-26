import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
compleated:{
    type:Boolean,
    default: false
}

})

export const Todo = mongoose.model('Todo',todoSchema);