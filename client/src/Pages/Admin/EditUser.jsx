import React,{ useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NotPage from '../../Component/404Page';
import axios from "axios"
import M from "materialize-css"


function EditUser() {
    const [user, setUser] = useState({})
    const [name, setName] = useState("")
    const [cert, setCert] = useState("")
    const [bio, setBio] = useState("")
    const [quote, setQuote] = useState("");
    const [username, setUsername] = useState("")
    const [validUrl, setValidUrl] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        const getUser = async() =>{
            const singlePost = await axios.get(`http://localhost:5000/api/user/${id}`)
            setUser(singlePost.data)
            setValidUrl(true)
            setName(singlePost.data.name)
            setCert(singlePost.data.cert)
            setBio(singlePost.data.bio)
            setUsername(singlePost.data.username)
            setQuote(singlePost.data.quote)
        }
        getUser()
    },[])
    const updateUser = () =>{
        fetch("http://localhost:5000/api/update",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization" : "Bearer " +localStorage.getItem("token")
      },
      body:JSON.stringify({name, username, bio, cert, quote})
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.error){
        M.toast({html:data.error,  classes:"#c62828 red darken-4"})
        return 
     }else{
         M.toast({html:"Profile Updated Successfully", classes:"#4caf50 green darken-1"})
        window.location.replace("/admin/users/"+data._id)
     }
    }).catch(err=>console.log(err))
    }
  return (
    <div>
        {
          validUrl ? 
        <>
        {
            user &&
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
                            <h4 className='profilelogo'>Edit User</h4>
                        </div>
                        <div className="col s8 m6 profileJustify">
                            <Link to="/admin/users/create">
                                <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 green darken-2'>Create User</button>
                            </Link>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 z-depth-1" style={{marginRight:"4%",marginLeft:"2%", marginBottom:"5px"}}>
                        <div className="col s12">
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <img src={user.pic} alt="" style={{width:"60px",height:"60px",marginRight:"10px",marginTop:"10px", objectFit:"cover", borderRadius:"50%"}}/>
                                <div className="profile_name" style={{display:"flex", alignItems:"center"}}>
                                    <h6>{user.name}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "black", margin:"7px, 0", fontSize:"15px"}}>User Details</span>
                            <div style={{display:"flex",marginTop:"5px",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>person</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>{user.username}</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>mail</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>{user.email}</span>
                            </div>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <i className='tiny material-icons'style={{marginRight:"10px"}}>format_quote</i>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word", textAlign:"justify"}}>{user.quote}</span>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "black", margin:"7px, 0", fontSize:"15px"}}>Biography</span>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word",textAlign:"justify" }}>{user.bio}</span>
                            </div>
                        </div>
                        <div className="col s12" >
                            <span  style={{color: "black", margin:"7px, 0", fontSize:"15px"}}>Certification</span>
                            <div style={{display:"flex",marginBottom:"10px"}}>
                                <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px", wordBreak:"break-word",textAlign:"justify" }}>{user.cert}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7 z-depth-1">
                        <div className="row " style={{marginLeft:"2%",marginRight:"1%"}}>
                            <div className="col s12 " style={{marginTop:"20px"}}>
                                <form className="settingsForm" onSubmit={(e)=>{e.preventDefault(); updateUser()}}>
                                    <div className="row">
                                        <div className="col s12 m6 "style={{marginTop:"5px"}}>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" placeholder={name} value={name} onChange={(e)=>setName(e.target.value)} required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="username">Username</label>
                                                    <input type="text" placeholder={username} value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="username">Favourite Quote</label>
                                                    <textarea placeholder={quote} value={quote} onChange={(e)=>setQuote(e.target.value)} required  className="materialize-textarea" data-length="120"></textarea>      
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6" style={{marginTop:"5px"}}>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="name">Biography</label>
                                                    <textarea placeholder={bio} value={bio} onChange={(e)=>setBio(e.target.value)} required className="materialize-textarea"></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <label htmlFor="name">Certification</label>
                                                    <textarea placeholder={cert} value={cert} onChange={(e)=>setCert(e.target.value)} required className="materialize-textarea"></textarea>
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

export default EditUser