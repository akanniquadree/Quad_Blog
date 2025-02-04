import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"
import { UserContext } from '../Context/action'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {state, dispatch} = useContext(UserContext)
  const history = useNavigate()
  // const onChange = (e) =>{
  //   e.preventDefault()
  //   // const email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   // const username_regex = /^[a-zA-Z][\w-]+$/;

  // }
  const postData = () =>{
    fetch("https://quad-blog.onrender.com/api/signin",{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email, password})
    }).then(res=>res.json()).then(data =>{
    if(data.error){
      M.toast({html: data.error, classes:"#c62828 red darken-4"})
      return
    }
    if(data.message){
      M.toast({html: data.message, classes:"#c62828 red darken-4"})
      return
    }
    else{
      localStorage.setItem("user",JSON.stringify(data.others))
      localStorage.setItem("token", data.tokenHeader)
      dispatch({type:"USER", payload:data.others})
      M.toast({html:"Welcome "+data.others.name, classes:"#4caf50 green darken-1"})
      history("/")
    }
    }).catch(err=>{console.log(err)})
  }
  return (
    <div className='sign_Cont'>
            <div className="card sign_wrapper input-field" >
                <h2 className='brand-logo'>QuadBlog</h2>
                    <input type="text" value={email} placeholder='Enter your Email or username' onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" value={password} placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <p className='page'><Link to="/resetpassword" className='link'>Forgot Password</Link></p>
                    <button className='btn waves-effect waves-yellow #64b5f6 blue darken-2' onClick={()=>postData()}>
                        Log in now
                    </button>
                    <p><Link to="/signup" className='link'>Dont have an account ?Register</Link></p>
            </div>
        </div>
  )
}

export default SignIn