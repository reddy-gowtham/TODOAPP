import dotenvb from "dotenv";
import { ConnectDB } from "./config/dbConnect";
import app from "./app"
dotenv.config();
ConnectDB();
const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})

