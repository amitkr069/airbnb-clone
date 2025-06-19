import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config()

let port = process.env.PORT || 6000
let app = express()

// app.get("/", (req, res)=>{
//     res.send("hello from server")
// })
// no iska kaam nii h


// making middle ware
app.use(express.json()) // json likhe because jo v body ke nadr data pass karenge
//  wo json form me hoga to undfined na aye thats why ye kiye

//cookie parser
app.use(cookieParser())

// middle ware for backend - frontend
app.use(cors({
    //isse frontend ka link connect ho jayega
    origin:"http://localhost:5173", 
    credentials:true
}))
app.use("/api/auth", authRouter) // signup ya login jo v hoga wo call hote jayega


app.listen(port, ()=>{
    connectDb();
    console.log("server starged");
})
