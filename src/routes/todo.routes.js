import express from "express";
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from "../controllers/todo.controller.js";
//why we are importing express because it has a method called router which is used to connect all the routes
//(); -- this is a method

const router = express.Router();
router.post('/',createTodo);       //post for create
router.get('/',getTodo);    //get for read
router.get("/:id",getTodoById); 
router.put('/:id',updateTodo); //put for update
router.delete('/:id',deleteTodo);
export default router;
