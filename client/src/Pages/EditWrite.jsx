import React, { useContext, useEffect, useRef, useState } from 'react'
import UserProfileSide from './UserProfileSide';
import {Link} from "react-router-dom"
import M from "materialize-css"
import DeleteModal from '../Component/DeleteModal'
import ProfileMobile from '../Component/ProfileMobile'
import { UserContext } from '../Context/action';
import axios from "axios"
import { useParams } from 'react-router-dom';
import NotPage from '../Component/404Page';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function EditWrite() {
    const [validUrl, setValidUrl] = useState(false)
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [cat, setCat] = useState("")
    const [url, setUrl] = useState("")
    const {id} = useParams()
    const modal = useRef(null)
    const side = useRef(null)
    const option= useRef()
    useEffect(()=>{
        const getPost = async() =>{
            const data = await axios.get(`http://localhost:5000/api/post/${id}`,{headers:{"authorization":"Bearer " +localStorage.getItem("token")}})
             setPost(data.data)
             setTitle(data.data.title)
            setDesc(data.data.desc)
            setCat(data.data.category.name)
            setValidUrl(true)
            // setImage(data.data.image)
        }
        getPost()
        M.Modal.init(modal.current)
        M.Sidenav.init(side.current)
        M.FormSelect.init(option.current)
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
                 window.location.replace(`/profile/posts/${id}`)
             }
        }).catch(err=>console.log(err))

        }

    },[url])
    console.log(post)
    
    const postData = () =>{
        const form = new FormData()
        form.append("file", image)
        form.append("upload_preset", "QuadBlog")
        form.append("cloud_name", "youngdollar")
        fetch("https://api.cloudinary.com/v1_1/youngdollar/image/upload",{
            method:"post",
            body:form
        }).then(res=>res.json()).then(data=>{setUrl(data.url); console.log(url)}).catch(err=>console.log(err))

    }
  return (
      
    <div>
        {
            validUrl ?
            <>
                   <div className="row">
            <div className="col s12 m2  mobile" style={{height:"100vh"}}>
                <UserProfileSide/>
            </div>
            <div className="col s12 m10">
                <div className="row single_row">
                    <div className="col s5 m6 profileS" >
                        <Link to="#" data-target="slide-out" className="sidenav-trigger desktop link"><i className="material-icons" style={{marginTop:"17px", marginRight:"15px"}}>menu</i></Link>
                        <h4 className='profilelogo'>Edit Post</h4>
                    </div>
                    <div className="col s7 m6 profileJustify">
                        <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 red darken-2 modal-trigger' data-target="modal1">Delete Post</button>
                    </div>
             </div> 
                <div className="row z-depth-2" style={{marginLeft:"2%",marginRight:"1%"}}>
                    <div className="col s12 write_img">{
                                        image && <img src={URL.createObjectURL(image)} className='writeImage' alt=''/>
                                    }
                        
                    </div>
                    <div className="col s12">
                        <form style={{marginLeft:"3%"}} onSubmit={(e)=>{
                            e.preventDefault();
                            postData()
                        }}>
                            <div className="file-field input-field">
                                <div className="btn-small  waves-yellow #64b5f6 blue darken-2">
                                    <span>Image</span>
                                    <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} required/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload Image"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div className="input-field col s12">
                                        <input id="title" type="text" className="validate" required value={title} data-length="15" placeholder={post.title} onChange={(e)=>{setTitle(e.target.value)}}/>
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
        {/* Delete Modal PopUp */}
        <div id="modal1" className="modal" ref={modal}>
          <DeleteModal/>
        </div>
        {/* Delete Modal PopUp */}
        {/* Mobile side view PopUP */}
        <div id="slide-out" className="sidenav profile_slide z-depth-3" ref={side}>
            <ProfileMobile/>
          </div>
        {/* Mobile side view PopUP */}
            </>:
            <NotPage/>
        }
 
    </div>
  )
}

export default EditWrite