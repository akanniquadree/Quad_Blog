import mongoose from "mongoose"


const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    title:{
        type:String,
        required: true,
        unique:true
    },
    image:{
        type:String,
        required:false,
        default:""
    },
    desc:{
        type:String,
        required:true,
    },
    comment:[{
        text:String,
        postedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true
    }

},{timestamps:true})

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
