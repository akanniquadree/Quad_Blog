import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./Routes/AuthRoute.js"
import cors from "cors"
import userRoute from "./Routes/UserRoute.js"
import postRoute from "./Routes/PostRoute.js"

dotenv.config()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URL,{
    
},(err)=>{
    if(err){
        return console.error(err)
    }
    console.log("Connected to Database")
})

const app = express()
app.use(cors({
}))
app.use(express.json())

app.use("/api",authRoute)
app.use("/api",userRoute)
app.use("/api",postRoute)








app.listen(PORT, ()=>{
    console.log(`server is listen in ${PORT}`)
})