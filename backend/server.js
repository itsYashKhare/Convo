import express from "express";
import dotenv from "dotenv";
//importing authRoutes
import authRoutes from "./routes/authRoutes.js";
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();


dotenv.config();
const PORT = process.env.PORT || 5000

app.get("/", (req,res) =>{
    // root route http://localhost:5000/
    res.send("Hello hello!");
})

//using middleware to access authRoutes file path
app.use("/api/auth", authRoutes)

app.listen(PORT , ()=>{
    // connected mongodb 
    connectToMongoDB();
    console.log(`Server is running on ${PORT}`)
});