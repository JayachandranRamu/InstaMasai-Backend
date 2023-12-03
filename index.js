const express=require("express");
const cors=require("cors");
const { UserRouter } = require("./Routes/users.routes");
const { PostRouter } = require("./Routes/posts.routes");
const { connection } = require("./db");
const app=express();

app.use(express.json());
app.use(cors());

app.use("/users",UserRouter)
app.use("/posts",PostRouter)
app.get("/",(req,res)=>{
res.send("Backend Is Running!")
})
app.listen(3000,async()=>{
    try {
        await connection;
        console.log("DB is connected")
        console.log("Server is running at 3000")
    } catch (error) {
        console.log(error);
    }
   
})
