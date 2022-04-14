import express from "express"
import UserModel from "../Model/UserModel.js"
import bcrypt from "bcrypt"
import { RequireLogin } from "../MiddleWares/RequireLogin.js"

const userRoute = express.Router()

userRoute.put("/changepassword", RequireLogin, async (req, res)=>{
    try {
        const {old, new1, new2} = req.body
        if(!old || !new1 || !new2) {
            return res.status(404).json({error:"Please fill all fields"})
        }
        if(new1 !== new2){
            return res.status(404).json({error:"Passwords does not match"})
        }
        const existPass = await UserModel.findById(req.user._id)
        if(existPass){
            const correct = await bcrypt.compare(old, existPass.password)
            if(correct){
                const salt = await bcrypt.genSalt(13)
                const hashedPassword = await bcrypt.hash(new1, salt)
                    const existPassword = await UserModel.findByIdAndUpdate(req.user._id,{
                        $set:{password:hashedPassword}
                    },{new:true})
                    if(existPassword){
                               return res.status(200).json({message:"Password Updated Sucessfully"})
                            }
                         return res.status(422).json({error:"Error in updating Password"})    
            }
            return res.status(422).json({error:"Old Password is incorrect"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
    

})

userRoute.put("/updatepic",RequireLogin,async(req, res)=>{
    try {
       const pic =  await UserModel.findByIdAndUpdate(req.user._id,{
            $set:{pic:req.body.pic}
        })
        if(pic){
           return res.status(200).json({pic, message:"Profile Picture Updated Successfully"})
        }
        return res.status(422).json({error:"Error in updating picture"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
   
})


userRoute.put("/update", RequireLogin ,async(req, res)=>{
    try {
        const {bio, name, username, quote, cert} = req.body
        const user = await UserModel.findById({_id:req.user._id})
        console.log(req.user._id)
            if(user){
                user.name = name;
                user.bio  = bio;
                user.username = username;
                user.quote = quote;
                user.cert = cert
                const savedUser = await user.save()
                if(savedUser){
                    return res.status(200).json(savedUser)  
                }
                return res.status(404).json({error:"Error in updating Profile"})
               
            }
            return res.status(404).json({error:"Error in updating Profile"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
   
})

//Get a particular User Profile
userRoute.get("/user/:id", async(req, res)=>{
    try {
        const user = await UserModel.findById({_id:req.params.id}).select("-password")
        if(user){
            return res.status(200).json(user)
        }
       return res.status(404).json({error:"User not found"})

    } catch (error) {
       return res.status(500).json({error:error})
    }
   
})



export default userRoute;