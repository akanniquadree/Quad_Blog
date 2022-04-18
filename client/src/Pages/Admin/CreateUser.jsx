import React, { useEffect, useRef, useState } from 'react'
import M from "materialize-css"
import { Link } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'

function CreateUser() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const option = useRef()
    useEffect(()=>{
        M.FormSelect.init(option.current)
    },[])
   
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
                            <select ref={option}>
                                        <option value="" disabled>Choose a Role</option>
                                        <option value={0}>User</option>
                                        <option value={1}>Admin</option>
                                    </select>
                                    <label>Role</label>
                        </div>
                        <div className="col s12" style={{marginBottom:"10px"}}>
                            <button className='btn waves-effect waves-yellow #64b5f6 blue darken-2'>
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