import React,{ useEffect, useState, useRef} from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NotPage from '../../Component/404Page';
import axios from "axios"
import M from "materialize-css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function EditPost() {
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [cat, setCat] = useState("")
    const [url, setUrl] = useState("")
    const [validUrl, setValidUrl] = useState(false)
    const {id} = useParams()
    const MenuItem1= useRef()
    useEffect(()=>{
        M.FormSelect.init(MenuItem1.current)
        const getPost = async() =>{
            const singlePost = await axios.get(`http://localhost:5000/api/post/${id}`)
            setPost(singlePost.data)
            setTitle(singlePost.data.title)
            setDesc(singlePost.data.desc)
            setImage(singlePost.data.image)
            setCat(singlePost.data.category.name)
            setValidUrl(true)
        }
        getPost()
        if(url){
            fetch(`http://localhost:5000/api/post/${id}`,{
                method:"put",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " +localStorage.getItem("token")
                },
                body:JSON.stringify({title,cat,desc,image:url})
            }).then(res=>res.json()).then(data=>{
                if(data.error){
                    M.toast({html:data.error,  classes:"#c62828 red darken-4"})
                    return 
                 }
                 else{
                     M.toast({html:data.message, classes:"#4caf50 green darken-1"})
                     window.location.replace(`admin/posts/${id}`)
                 }
            }).catch(err=>console.log(err))
        }
    },[url])
    const postData = () =>{
       const form = new FormData
       form.append("file", image)
       form.append("upload_preset", "QuadBlog")
       form.append("cloud_name", "youngdollar")
       fetch("https://api.cloudinary.com/v1_1/youngdollar/image/upload",{
           method:"post",
           body:form
       }).then(res=>res.json()).then(data=>{setUrl(data.url)}).catch(err=>console.log(err))
    }
  return (
    <div>
        {
          validUrl ? 
        <>
        {
            post &&
        <>
        <Navbar/>
        <div className="row">    
            <div className="col s12 m2  mobile">
                <Sidebar/>
            </div>
            <div className="col s12 m10">
                <div className="row">
                    <div className="col s12">
                    <div className="row single_row">
                        <div className="col s4 m6 profileS" >
                            <h4 className='profilelogo'>Edit Post</h4>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 z-depth-1" style={{marginRight:"4%",marginLeft:"2%", marginBottom:"5px"}}>
                        <div className="col s12">
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <img src={post.image} alt="" style={{width:"60px",height:"60px",marginRight:"10px",marginTop:"10px", objectFit:"cover", borderRadius:"50%"}}/>
                                <div className="profile_name" style={{display:"flex", alignItems:"center"}}>
                                    <h6>{post.title}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "black", margin:"7px, 0", fontSize:"15px"}}>Post Details</span>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>person</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>{post.user.name}</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>folder</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>{post.category.name}</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px", color:"red"}}>favorite</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word" }}>{post.likes.length}</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>chat</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word" }}>{post.comments.length}</span>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "black", margin:"7px, 0", fontSize:"15px"}}>Description</span>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word",textAlign:"justify",whiteSpace:"pre-line" }}>{post.desc}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7 z-depth-1">
                        <div className="row " style={{marginLeft:"2%",marginRight:"1%"}}>
                            <div className="col s12 " style={{marginTop:"20px"}}>
                                <div className="col s12 write_img">{
                                        image && <img src={image ? image : URL.createObjectURL(image)} className='writeImage' alt=''/>
                                    }
                        
                                </div>
                            <form style={{marginLeft:"3%"}} onSubmit={(e)=>{
                            e.preventDefault();
                            postData()
                        }}>
                            <div className="file-field input-field">
                                <div className="btn-small  waves-yellow #64b5f6 blue darken-2">
                                    <span>Image</span>
                                    <input type="file"  onChange={(e)=>{setImage(e.target.files[0])}} />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" value={image}  type="text" placeholder="Upload Image" required  />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div className="input-field col s12">
                                        <input id="title" type="text" className="validate" required value={title} maxlength={20} placeholder={post.title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                        {/* <label htmlFor="title">Title</label> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={cat}
                                        label="Age"
                                        onChange={(e)=>{setCat(e.target.value)}}
                                        >
                                        <MenuItem value="" disabled>Choose a Category</MenuItem>
                                        <MenuItem value="Book">Book</MenuItem>
                                        <MenuItem value="Business">Business</MenuItem>
                                        <MenuItem value="Fashion">Fashion</MenuItem>
                                        <MenuItem value="Film">Film</MenuItem>
                                        <MenuItem value="Food">Food</MenuItem>
                                        <MenuItem value="Game">Game</MenuItem>
                                        <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                                        <MenuItem value="Motivation">Motivation</MenuItem>
                                        <MenuItem value="Music">Music</MenuItem>
                                        <MenuItem value="Travel">Travel</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                        <MenuItem value="None">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <select ref={MenuItem1} value={cat}  onChange={(e)=>{setCat(e.target.value)}}>
                                        <MenuItem value="" disabled>Choose a Category</MenuItem>
                                        <MenuItem value="Book">Book</MenuItem>
                                        <MenuItem value="Business">Business</MenuItem>
                                        <MenuItem value="Fashion">Fashion</MenuItem>
                                        <MenuItem value="Film">Film</MenuItem>
                                        <MenuItem value="Food">Food</MenuItem>
                                        <MenuItem value="Game">Game</MenuItem>
                                        <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                                        <MenuItem value="Motivation">Motivation</MenuItem>
                                        <MenuItem value="Music">Music</MenuItem>
                                        <MenuItem value="Travel">Travel</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                        <MenuItem value="None">None</MenuItem>
                                    </select>
                                    <label>Categories</label> */}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="tiny material-icons prefix">mode_edit</i>
                                            <textarea id="icon_prefix2" className="materialize-textarea" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                                            {/* <label htmlFor="icon_prefix2">Tell Your Story</label> */}
                                        </div>
                                        <button className='btn-small waves-effect waves-yellow #64b5f6 blue darken-2' type="submit" >
                                            Update Post
                                        </button> 
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                        </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
         }
        </>:
        <NotPage/>
        }
    </div>
  )
}

export default EditPost