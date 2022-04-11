import React, { useEffect, useRef, useState, useContext } from 'react'
import UserProfileSide from './UserProfileSide'
import {Link} from "react-router-dom"
import M from "materialize-css"
import DeleteModal from '../Component/DeleteModal'
import ProfileMobile from '../Component/ProfileMobile'
import { UserContext } from '../Context/action'


function Write() {
    const {state} = useContext(UserContext)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [cat, setCat] = useState("")
    const [url, setUrl] = useState("")
    const modal = useRef()
    const side = useRef()
    const option= useRef()
  useEffect(()=>{
    M.Modal.init(modal.current)
    M.Sidenav.init(side.current)
    M.FormSelect.init(option.current)
    
    if(url){
        fetch("http://localhost:5000/api/createpost",{
            method:"post",
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " +localStorage.getItem("token")
            },
            body:JSON.stringify({title,cat,desc,image:url})
        }).then(res=>res.json()).then(data=>{
            if(data.error){
                M.toast({html:data.error,  classes:"#c62828 red darken-4"})
                return 
             }else{
                 M.toast({html:data.message, classes:"#4caf50 green darken-1"})
                 window.location.replace("/profile")
             }
        }).catch(err=>console.log(err))

    }
  },[url])

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
        <div className="row">
            <div className="col s12 m2  mobile" style={{height:"100vh"}}>
                <UserProfileSide/>
            </div>
            <div className="col s12 m10">
                <div className="row single_row">
                    <div className="col s5 m6 profileS" >
                        <Link to="#" data-target="slide-out" className="sidenav-trigger desktop link"><i className="material-icons" style={{marginTop:"17px", marginRight:"15px"}}>menu</i></Link>
                        <h4 className='profilelogo'>Create Post</h4>
                    </div>
                    <div className="col s7 m6 profileJustify">
                        <Link to="/profile/edit" className="link"><span style={{fontWeight:"500",lineHeight:"2px",fontSize:"15px"}}>Edit</span><i className="tiny material-icons" style={{color:"green"}}>edit</i></Link>
                        <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 red darken-2 modal-trigger' data-target="modal1">Delete Account</button>
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
                                    <input type="file"  onChange={(e)=>{setImage(e.target.files[0])}}/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload Image"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div className="input-field col s12">
                                        <input id="title" type="text" className="validate" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                        <label htmlFor="title">Title</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <select ref={option}  value={cat} onChange={(e)=>{setCat(e.target.value)}}>
                                        <option value="" disabled>Choose a Category</option>
                                        <option value="Book">Book</option>
                                        <option value="Business">Business</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Film">Film</option>
                                        <option value="Food">Food</option>
                                        <option value="Game">Game</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                        <option value="Motivation">Motivation</option>
                                        <option value="Music">Music</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Others">Others</option>
                                        <option value="None">None</option>
                                    </select>
                                    <label>Categories</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="tiny material-icons prefix">mode_edit</i>
                                            <textarea id="icon_prefix2" className="materialize-textarea" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                                            <label htmlFor="icon_prefix2">Tell Your Story</label>
                                        </div>
                                        <button className='btn-small waves-effect waves-yellow #64b5f6 blue darken-2' type="submit" >
                                            Upload Post
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
    </div>
  )
}

export default Write