import express from "express";  //express is a frame work 
import todoRoutes from ".routes/todo.routes.js"
app.use(express.urlencoded());  //accept the data in the url form
app.use(express.json());    //accept the data in the json form

app.use('/api/v1/todos',todoRoutes);  //  /api/v1/todos  -- for security purpose   //todoRoutes is used because we can use method like create, update , delete and etc

const app = express();    //we have to use a variable










export default app;