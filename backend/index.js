import express from "express";
import authRoute from "./routes/auth.js"

const app=express()

app.use(express.json());

app.use("/api/auths",authRoute)

app.listen(8800,()=>{
    console.log("connected to backend")
})
