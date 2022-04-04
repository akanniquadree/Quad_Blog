import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true
    },
    password:{
        type:String,
        required: true,
        trim:true
    },
    username:{
        type:String,
        required: true,
        trim:true
    },
    verify:{
        type:Boolean,
        default: false
    },
    pic:{
        type:String,
        default:""
    },
    role:{
        type:Number,
        default: 0
    },
    quote:{
        type:String,
        default:"Enter Your Favourite Quote"
    },
    cert:{
        type:String,
        dafault:"Enter Your certification"
    },
    bio:{
        type:String,
        default:"Enter your Biography"
    },
    resetToken: String,
    expireToken: Date,
},{timestamps:true})

const UserModel = mongoose.model("User", userSchema)

export default UserModel;
