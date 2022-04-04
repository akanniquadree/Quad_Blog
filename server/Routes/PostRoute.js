import express from "express"
import { RequireLogin } from "../MiddleWares/RequireLogin.js"
import Category from "../Model/Category.js"
import PostModel from "../Model/Post.js"





const postRoute = express.Router()

// //Get all posts
postRoute.get("/posts", async(req, res)=>{
    try {
        const post = await PostModel.find().sort("-createdAt").populate("category","_id name")
    if(post){
       return res.status(200).json(post)
    }
    } catch (error) {
      return  res.status(500).json(error)
    }
    
})
//Get a particular category
postRoute.get("/category/:name", async(req, res)=>{
    try {
        const category = await Category.findOne({name:req.params.name}).populate("posts").sort("-createdAt")
            if(category){
                return res.status(200).json(category)
            }
            return res.status(422).json({error:"Error in retriving Category"})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
    
})





// postRoute.get("/posts", (req,res)=>{
//     const username = req.params.user
//     const catName = req.params.cat
//     try {
//        let posts
//        if(username){
//            await PostModel.findOne({postedBy: username})
//        }
//        else if(catName){
//            await Post.findOne({category:{
//                $in:[catName]
//            }})
//        }else{
//            await Post.find()
//        }
//        res.status(200).json(posts).populate("postedBy","_id name").populate("comment.postedBy", "_id name")
//     } catch (error) {
//         res.status(500).json(err)
//     }
// })

//get a single Post
postRoute.get("/post/:id", RequireLogin,async(req, res)=>{
    try {
        const post = await PostModel.findById({_id:req.params.id}).populate("category", "_id name")
        if(post){
          return  res.status(200).json(post)
          console.log(post)
        }
        return  res.status(422).json({error:"Error in getting post"})
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
})

//Get User post
postRoute.get("/user/post", RequireLogin, async(req,res)=>{
    try {
        const userPost = await PostModel.find({user:req.user._id}).populate("user", "_id name").populate("category","_id name").sort("-createdAt")
        if(userPost){
            return res.status(200).json(userPost)

        }
        return res.status(400).json({message:"Error in getting post"})
    } catch (error) {
        res.status(500).json(err)
    }
})


//Create a Post
postRoute.post("/createpost", RequireLogin, async(req, res)=>{
    try {
        const {title, image, desc, cat} = req.body
        //
        if(!title || !desc || !cat){
            return res.status(422).json({message:"Please all the required field"})
        }
        const existingPost = await PostModel.findOne({title})
        if(existingPost){
            return res.status(422).json({message:"Post already exist with that title"})
        }
        //saving new post to the backend
        const post = new PostModel({
            title,
            desc,
            image,
            user:req.user._id ///Gotten from the Middleware
        }) 
        //checking if there is existing category in the data base
        const categorys = await Category.findOne({name:cat})
        if(categorys){
            //if there is existing cateogry then update the postId
            const category = await Category.findOneAndUpdate({name:cat},{
                $push:{posts: post._id}
            },{new:true})
            if(category){
                post.category = categorys._id
                const saved = await post.save()
                if(saved){
                   return res.status(200).json({message:"Post is updated successfully"})   
                }
            }                 
        }
        //if there is no existing category then save new category
        const cats = new Category({
            name: cat
        })
        post.category = cats._id
        const save = await post.save()
        cats.posts.push(post._id)
        await cats.save()
        if(save){
            return res.status(200).json({post})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

//get category 
postRoute.get("/category", async(req,res)=>{
    try {
        const newCat = await Category.find().populate("posts", "_id title")

        if(newCat){
           return res.status(200).json(newCat)
        }
        return res.status(422).json({error:"Error in getting post"})
    } catch (error) {
      return  res.status(500).json(error)
    }
})

//Update a existing Post
postRoute.put("/post/:id", RequireLogin, async(req,res)=>{
    try {
        const postId = req.params.id
        const {title, image, desc, cat} = req.body
        //
        if(!title || !desc || !cat){
            return res.status(422).json({message:"Please all the required field"})
        }
        const existingCat = await Category.findOne({name:cat})
        if(existingCat){
            const posts = await PostModel.findByIdAndUpdate(postId,{
                $set:{title, image,desc,category:existingCat._id}
            },{new:true})
            if(posts){
                const cats = await Category.findOneAndUpdate({posts:postId},{
                    $pull:{posts:postId}
                },{new:true})
                if(cats){
                    const updatedCat = await Category.findOneAndUpdate({name:cat},{
                        $push:{posts:postId}
                    },{new:true})
                    if(updatedCat){
                        return res.status(200).json({message:"Post Successfully Updated"})
                    }
                    return res.status(422).json({error:"Error in Updating post"})
                }
                return res.status(422).json({error:"Error in Updating post"})
            }
            return res.status(422).json({error:"Error in Updating post"})

        }
       
        const createCat = new Category({
            name:cat,
            posts:postId
        })
        await createCat.save()
        const alreadyPost = await PostModel.findByIdAndUpdate(postId,{
            $set:{title, image,desc,category:createCat._id}
        },{new:true})
        if(alreadyPost){
            const catss = await Category.findOneAndUpdate({posts:postId},{
                $pull:{posts:postId}
            },{new:true})
            if(catss){
                return res.status(200).json({message:"Post Successfully Updated"})
            }
            return res.status(422).json({error:"Error in Updating post"})
        }
        return res.status(422).json({error:"Error in Updating post"})
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
})


//Delete a existing Post
postRoute.delete("/post/:id", RequireLogin, async(req,res)=>{
    try {
        const post = await PostModel.findById({_id:req.params.id}).populate("user","_id")
            if(post.user._id.toString() == req.user._id.toString()){
                 const removedPost = post.deleteOne()
                if(removedPost){
                    removeCat = await Category.findOne({post:req.params.id},{
                        $pull:{posts:req.params.id}
                    })
                    if(removeCat){
                      return  res.json({message:"Post is Successfully Deleted"}) 
                    }

                   
                }
                return res.status(400).json({error: "Error in deleting Post"})
            }
            return res.status(40).json({Error: "You are not Authorized to delete this post"})
    } catch (error) {
        res.status(500).json(err)
    }
})


export default postRoute;