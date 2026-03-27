import express from "express";
import cookieParser from "cookie-parser";
import "./config/dns.js"
import "dotenv/config"
import dbconnect from "./config/db.js";
import authRouter from "./routes/auth.router.js";



const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth",authRouter)
const initalizeConnetion = async ()=>{
 try {
    await Promise.all([
      dbconnect(),
     
    ]);

    console.log("All services connected successfully");

 } catch (error) {
     console.error("Connection failed:", error);
  
 }
}

initalizeConnetion()







export default app 

