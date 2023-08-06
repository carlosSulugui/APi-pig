import "dotenv/config"
import "./db/connection.js"
import express from "express"
const app = express()
import providerRouter from "./routes/provider.router.js";


app.use(express.json())

app.get("/api/v1/home/",(req ,res) =>{
    res.json({message: "home"})
})

app.use("/api/v1/provider", providerRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>console.log(`server running on port ${PORT}`))

