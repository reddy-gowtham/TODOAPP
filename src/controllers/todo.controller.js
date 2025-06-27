import {Todo} from "../models/todo.model.js";
//create

export const createTodo= async(req,res)=>{
    try{
    const {title,description} = req.body   //its way of accepting the data in key value pair -- req.body
    //console.log(title);
    const newTodo = await Todo.create({
        title: title,
        description:description
    })
    res.status(201).json(newTodo)
}catch(error){
    res.status(400).json({message:error.message})
}

}   //amazon database
// flipcart mintra google   - seperate database for the companies. for product , users and sellers and etc
//to test apis - postmen application

//read all
export const getTodo=async(req,res)=>{
    try{
const todos = await Todo.find();
res.status(201).json(todos)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

//read one
export const getTodoById=async (req,res)=>{
    try{
   const todo = await Todo.findById(req.params.id);
   res.status(201).json(todo)                    //if wanted can use try catch block and also 
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
//update
export const updateTodo=async(req,res)=>{
    try{
   const updateTodo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateTodo)
   }catch(error){
    res.status(400).json({message:error.message})
   }
   }


//delete
export const deleteTodo=async(req,res)=>{
    try{
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
    res.json({message:"Todo Deleted"})
    }catch{
        res.status(400).json({message:error.message})
    }
}
