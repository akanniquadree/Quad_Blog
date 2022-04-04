import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import M from "materialize-css"

function NewPassword() {
    const [validUrl, setValidUrl] = useState(false)
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const {token} = useParams()
    const postData = ()=>{
        fetch("http://localhost:5000/api/newpassword", {
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({password,token,conPassword})
        }).then(res=>res.json()).then(data=>{
            if(data.error){M.toast({html:data.error,  classes:"#c62828 red darken-4"})}
            else{
                M.toast({html:data.message, classes:"#4caf50 green darken-1"})
                // history("/signin")
            }
        }).catch(err=>console.log(err))
    }
  return (
    <div className='sign_Cont'>
            <div className="card sign_wrapper input-field" >
                <h2 className='brand-logo'>QuadBlog</h2>
                <input type="password" value={password} placeholder='Enter  New Password' onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" value={conPassword} placeholder='Re-Enter Your Password' onChange={(e)=>setConPassword(e.target.value)}/>
                <button className='btn waves-effect wave-light #64b5f6 blue lighten-2' onClick={()=>postData()}>
                    Update Password
                </button>
            </div>
        </div>
  )
}

export default NewPassword