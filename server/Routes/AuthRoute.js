import express from "express"
import bcrypt from "bcrypt"
import UserModel from "../Model/UserModel.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import sgMail from "@sendgrid/mail"
import Token from "../Model/Token.js"
import dotenv from "dotenv"
import { authRole, RequireLogin } from "../MiddleWares/RequireLogin.js"
dotenv.config()

const authRoute = express.Router()
sgMail.setApiKey(process.env.SENDGRID_TRANSPORT)

//Route for Signing Up 
authRoute.post("/signup", async(req,res)=>{
    const {email, name, password, username, conPassword} = req.body
    try {
        
        //Checking for the email name and username field if they are empty 
        if(!email || !name || !password || !username || !conPassword){
            return res.status(422).json({error:"Please fill all the fields"})
        }
        if(password !== conPassword){
            return res.status(422).json({error:"Password does not match"})
        }
        //checking for if user email already exist in the database
        const existUser = await UserModel.findOne({email:email})
        if(existUser){
            return  res.status(422).json({error:"User already exist with that email"})
        }

        //hashing the password using bcrypt to protect it from theft 
        const salt = await bcrypt.genSalt(13)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        //saving the parameters into the backend
        const user = new UserModel({
            email,
            name,
            password:hashedPassword,
            username
        })
        const savedUser = await user.save()
        
        //sending an activation mail to the user email using sendGrid
        if(savedUser){
        //activation token sent to the email
            const jwtToken = jwt.sign({_id:savedUser._id},process.env.JWT_ACTIVATION)

            //Saving the token to the Token Model (one to one) pupolation
            const token = await new Token({
                userId:savedUser._id,
                token: jwtToken,
            }).save()
            
            //the url sent to the client email for verification
            const url = `${process.env.BASE_URL}/users/${savedUser._id}/verify/${token.token}`
            const send = {
                to:savedUser.email,
                from:"akanniquadry7@gmail.com",
                subject: "ACCOUNT VERIFICATION",
                html:`
                    <h4>Verify your email by clicking this </h4>
                    <p>${url}</p>
                    <p><a href="${url}">${url}</a></p>
                `
            }
            sgMail.send(send).then(sent=>{
                return res.status(400).json({message: "A mail has been sent to your Email, please verify your email"})
            }) 
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
})

//Route for Signing in 
authRoute.post("/signin", async(req, res)=>{
    try {
        const {email, password} = req.body

         //Checking for either the email or username and password field if they are empty 
        let conditions = (email.indexOf('@') === -1) ? {username: email} : {email: email}
        if(!conditions || !password) {
            return res.status(422).json({error:"Please fill all fields"})
        }
        const user = await UserModel.findOne(conditions)
        if(!user){
            return res.status(422).json({error:"You have entered a wrong email or password"})
        }
        const verifyPassword = await bcrypt.compare(password, user.password)

        //verifying if the user email has being verified or not
        if(!verifyPassword){
             return res.status(422).json({error:"You have entered a wrong email or password"})
        }
        if(!user.verify){
            //activation token sent to the email
            const jwtToken = jwt.sign({_id:user._id},process.env.JWT_ACTIVATION)
            //Saving the token to the Token Model (one to one) pupolation
            let token = await Token.findOne({userId:user._id})
            if(!token){
                 const token = await new Token({
                     userId:user._id,
                     token: jwtToken,
                 }).save()

                    //the url sent to the client email for verification
                 const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`
                 console.log(url)
                 const send = {
                     to:user.email,
                     from:"akanniquadry7@gmail.com",
                     subject: "ACCOUNT VERIFICATION",
                     html:`
                         <h4>Verify your email by clicking this </h4>
                         <p><a href="${url}">${url}</a></p>
                     `
                 }
                 sgMail.send(send).then(sent=>{
                     return res.status(201).json({message: "You havent verify your email, A mail has been sent to your Email, please verify your email "})
                 })
             }
             return res.status(201).json({message: "You havent verify your email, A mail has been sent to your Email, please verify your email"})
         }
        if(verifyPassword){
            //Token that will be sent to the client
            
          const tokenHeader = jwt.sign({_id:user._id},process.env.JWT_HEADER)
          const {password,role,...others} = user._doc
          return res.status(200).json({tokenHeader, others})
        }
          
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
})

authRoute.get("/users/:id/verify/:token", async(req,  res)=>{
    try {
        const user = await UserModel.findOne({_id:req.params.id})
        if(!user){
            return res.status(401).json({error: "Invalid link"})
        }
        const token = await Token.findOne({
            userId:user._id,
            token:req.params.token
        })
        console.log(token)
        if(!token){
            return res.status(402).json({error: "Invalid link"})
        }
        
        const updateUser = await UserModel.findOneAndUpdate({_id:user._id},{
            $set:{verify:true}})
        if(updateUser){
            await Token.deleteOne()
            res.status(200).json({message:"Email has been Verified"})
        }
        
 
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
})

///Route to reset the user Password
authRoute.post("/resetpassword", async(req, res)=>{
    try {
        const {email} = req.body
        if(!email){
            return res.status(422).json({error: "Please put in your email"})
        }
        const user = await UserModel.findOne({email:email})
            if(!user){
                return res.status(422).json({error: "Email does not exist in our records"})
            }
        const tokenReset = jwt.sign({_id:user._id},process.env.JWT_RESET)
        user.resetToken = tokenReset
        user.expireToken = Date.now() + 3600000 // expires in 1hour 
        await user.save() // saving the resetToken and ExpiredToken into the UserModel
        const url = `${process.env.BASE_URL}/users/${user._id}/resetpassword/${user.resetToken}` //Url sent to the client for verification
        ///email parameters sent to the User 
        const send = {
            to:user.email,
            from: "akanniquadry7@gmail.com",
            subject:"RESET PASSWORD",
            html:`
                <h4>To reset your password, please click on the link below</h4>
                <p><a href="${url}">${url}</a></p>
                <p>The Link expires in an hour</p>
            `
        }
        sgMail.send(send).then(sent=>{
            return res.status(201).json({message:"Check Your email to reset your password"})
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
})


///Route to update the user Password
authRoute.post("/newpassword", async(req, res)=>{
    try {
        const {password, conPassword,token }= req.body
        if(!password || !conPassword){
           return res.status(422).json({error:"Please fill all fields"})
        }
        if(password !== conPassword){
            return res.status(422).json({error:"Password does not match"})
        }
        const user = await UserModel.findOne({expireToken:token, expireToken:{$gt:Date.now()}})
        if(!user){
            return res.status(422).json({error:"Please try again, Session Expired"})
        }
        const salt = await bcrypt.genSalt(13)
        const updatePassword = await bcrypt.hash(password, salt)
        if(updatePassword){
            user.password = updatePassword
            user.resetToken = undefined
            user.expireToken = undefined
            const updatedUser = user.save()
            if(updatedUser){
            res.status(200).json({message:"Password successfully updated"})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }

})

//Route for Signing Up 
authRoute.post("/admin/adduser",RequireLogin, authRole(), async(req,res)=>{
    const {email, name, password, username, conPassword, role} = req.body
    try {
        
        //Checking for the email name and username field if they are empty 
        if(!email || !name || !password || !username || !conPassword){
            return res.status(422).json({error:"Please fill all the fields"})
        }
        if(password !== conPassword){
            return res.status(422).json({error:"Password does not match"})
        }
        //checking for if user email already exist in the database
        const existUser = await UserModel.findOne({email:email})
        if(existUser){
            return  res.status(422).json({error:"User already exist with that email"})
        }

        //hashing the password using bcrypt to protect it from theft 
        const salt = await bcrypt.genSalt(13)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        //saving the parameters into the backend
        const user = new UserModel({
            email,
            name,
            password:hashedPassword,
            username,
            role
        })
        const savedUser = await user.save()
        
        //sending an activation mail to the user email using sendGrid
        if(savedUser){
            return res.status(200).json({savedUser, message:"User created Successfully, Verify the email to continue"})
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
})


export default authRoute;