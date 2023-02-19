/* importing necessary modules */

const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors");
const ConnectDb = require("./config/db.connect");
const todoRouter = require("./routes/todo.route");




const app = express()
app.use(express.json())
app.use(cors({
  origin:"*"
}))

app.get("/", (req,res)=>{
  res.send("<h1>Welcome to backend home route</h1>")
}) 

/* import all routes */
app.use("/todo",todoRouter)


const port = process.env.PORT || 8090;

app.listen(port, async () => {
await ConnectDb()
  console.log(`Server running on http://localhost:${port}`);
})  
