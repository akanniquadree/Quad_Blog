import jwt from "jsonwebtoken"
import UserModel from "../Model/UserModel.js"


export const RequireLogin = async (req, res, next) =>{
    const {authorization} = req.headers
    if(!authorization){
       return res.status(401).json({error: "You are not Authorized, Please Login If you want to continue"})
    }
    const token = authorization.replace("Bearer " , "")
    jwt.verify(token, process.env.JWT_HEADER, (err, payload)=>{
        if(err){
            return res.status(401).json({error: "You are not Authorized, Please Login If you want to continue"})
        }
        const {_id} = payload
       UserModel.findById(_id).then(savedUser=>{
            req.user = savedUser
             next()

        })
    })
}

export function authRole(role){
    return (req, res, next)=>{
        if(req.user.role !== 1){
           return res.status(401).json({error:"You are not Authorized"})
        }
        next()
    }
}