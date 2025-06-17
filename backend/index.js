import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
dotenv.config();

let port = process.env.PORT || 6000
let app = express()

app.get("/", (req, res)=>{
    res.send("hello from server")
})

app.listen(port, ()=>{
    connectDb();
    console.log("server starged");
})
