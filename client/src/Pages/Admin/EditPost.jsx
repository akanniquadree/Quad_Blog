import React from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import { Link } from 'react-router-dom';

function EditPost() {
  return (
    <div>
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
                                <img src="/images/caro2.jpg" alt="" style={{width:"60px",height:"60px",marginRight:"10px",marginTop:"10px", objectFit:"cover", borderRadius:"50%"}}/>
                                <div classNAme="profile_name" style={{display:"flex", alignItems:"center"}}>
                                    <h6>The Strange Land</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "#aaa", margin:"7px, 0", fontSize:"15px"}}>Post Details</span>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>Person</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>Akanni Quadry</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>Mail</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>category</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>Quote</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word" }}>Likes</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>Quote</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word" }}>comment</span>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "#aaa", margin:"7px, 0", fontSize:"15px"}}>Description</span>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word" }}>dkjdkjdjkdjkdjdjkdjkdjddkjdkjdkjdkdjkdjkdkdjdjkdjkdjdkjdkjdkjdkdjkdjkdjdkjdkdjkdjkdjdkjdkjdkdjkdjdkjdkjdkdjkdjdkjdkjdkdjkdjdkjdkjdkjdk</span>
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
                                                    <label htmlFor="name">Name</label>
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
    </div>
  )
}

export default EditPost