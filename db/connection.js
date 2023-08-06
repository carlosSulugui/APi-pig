import mongoose from "mongoose"
import "dotenv/config.js"
try{
    await  mongoose.connect(process.env["CONNECT_MONGOODB"])
    console.log("🔥🔥🔥 Connected to MongoDB 🔥🔥🔥")
}catch(error){
    console.log(error)
}