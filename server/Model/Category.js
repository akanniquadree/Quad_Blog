import mongoose from "mongoose"


const categorySchema = new mongoose.Schema({
    name:{
        type:String
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }]
},{timestamps:true})

const Category = mongoose.model("Category", categorySchema)

export default Category;