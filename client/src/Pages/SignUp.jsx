import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import M from "materialize-css"


function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [username, setUsername] = useState("")
    const history = useNavigate()
    const postData = () =>{
        fetch("http://localhost:5000/api/signup",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,email,password,username, conPassword})
        }).then(res=>res.json()).then(data=>{
            if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                M.toast({html:"Invalid Email", classes:"#c62828 red darken-4"})
                return
            }
            if(data.error){M.toast({html:data.error,  classes:"#c62828 red darken-4"})}
            else{
                M.toast({html:data.message, classes:"#4caf50 green darken-1"})
                history("/signin")
            }
        }).catch(error=>{console.log(error)})
    }
  return (
        <div className='sign_Cont'>
            <div className="card sign_wrapper input-field" >
                <div className="alte">
                    <button className="waves-effect btn-large sign_butt" style={{marginRight:"3rem",backgroundColor: "#db4a39"}}>Google</button>
                    <button className="waves-effect btn-large sign_butt"style={{backgroundColor: "#3b5998"}}>Facebook</button>
                </div>
                    <input type="text" value={name} placeholder='Enter your Fullname' onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" value={username} placeholder='Create a Username' onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="text"  value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" value={password} placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="password" value={conPassword} placeholder='Re-Enter your Password' onChange={(e)=>setConPassword(e.target.value)}/>
                    <p className='page'><label><input type="checkbox" /><span>I agree to QuadBlog Terms and Conditions</span></label></p>
                     <button className='btn waves-effect waves-yellow #64b5f6 blue darken-2' onClick={()=>postData()}>
                        Register Account
                    </button>
                   
                    <h5><Link to="/signin" className='link'>Already have an account ?</Link></h5>
            </div>
        </div>
  )
}

export default SignUp