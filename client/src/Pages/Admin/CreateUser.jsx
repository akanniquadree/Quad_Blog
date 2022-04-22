import React, { useEffect, useRef, useState } from 'react'
import M from "materialize-css"
import { Link } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'

function CreateUser() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const option = useRef()
    useEffect(()=>{
        M.FormSelect.init(option.current)
    },[])
   const createUser = () =>{
    fetch("http://localhost:5000/api/admin/adduser",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Authorization" : "Bearer " +localStorage.getItem("token")
        },
        body:JSON.stringify({name, username, email,password,conPassword, role})
      }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.error){
          M.toast({html:data.error,  classes:"#c62828 red darken-4"})
          return 
       }else{
           M.toast({html:data.message, classes:"#4caf50 green darken-1"})
          window.location.replace("/admin/users/"+data._id)
       }
      }).catch(err=>console.log(err))
   }
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
                                <h4 className='profilelogo'>Create A New User</h4>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="row z-depth-1"style={{marginRight:"4%",marginLeft:"2%", marginBottom:"5px"}}>
                    <div className="col s12 m6 " >
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <input type="text" value={name} placeholder='Enter your Fullname' onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <input type="text" value={username} placeholder='Create a Username' onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <input type="text"  value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div> 
                    <div className="col s12 m5">
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <input type="password" value={password} placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>   
                        </div>
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <input type="password" value={conPassword} placeholder='Re:Enter your Password' onChange={(e)=>setConPassword(e.target.value)}/>   
                        </div>
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <select ref={option} value={role} onChange={(e)=>setRole(e.target.value)} >
                                        <option value="" disabled>Choose a Role</option>
                                        <option value={0}>User</option>
                                        <option value={1}>Admin</option>
                                    </select>
                                    <label>Role</label>
                        </div>
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <button className='btn waves-effect waves-yellow #64b5f6 blue darken-2' onClick={()=>{createUser()}}>
                            Create User
                        </button>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser