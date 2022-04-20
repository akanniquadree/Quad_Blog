import React,{ useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NotPage from '../../Component/404Page';
import axios from "axios"

function EditPost() {
    const [post, setPost] = useState({})
    const [validUrl, setValidUrl] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        const getPost = async() =>{
            const singlePost = await axios.get(`http://localhost:5000/api/post/${id}`)
            setPost(singlePost.data)
            setValidUrl(true)
        }
        getPost()
    },[])
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
                                <div classNAme="profile_name" style={{display:"flex", alignItems:"center"}}>
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
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word", }}>{post.desc}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7 z-depth-1">
                        <div className="row " style={{marginLeft:"2%",marginRight:"1%"}}>
                            <div className="col s12 " style={{marginTop:"20px"}}>
                                <form className="settingsForm">
                                    <div className="row">
                                        <div className="col s12 m6 "style={{marginTop:"5px"}}>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="title">Title</label>
                                                    <input type="text" placeholder="name" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="username">Username</label>
                                                    <input type="text" placeholder="username" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="username">Favourite Quote</label>
                                                    <textarea placeholder="quote"  required className="materialize-textarea" data-length="120"></textarea>      
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6" style={{marginTop:"5px"}}>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="name">Biography</label>
                                                    <textarea placeholder="bio" required className="materialize-textarea"></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="name">Certification</label>
                                                    <textarea  placeholder="cert" required className="materialize-textarea"></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <button type='submit' className='btn-large btn_desk waves-effect waves-yellow #64b5f6 blue darken-2' >Update</button>
                                                </div>
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