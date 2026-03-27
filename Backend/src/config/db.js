import mongoose from "mongoose";


const dbconnect = async ()=>{
    try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("db connected successfully ")


    }
    catch(err){
     console.error("❌ DB Connection Error:", err.message);
    }
}
export default dbconnect