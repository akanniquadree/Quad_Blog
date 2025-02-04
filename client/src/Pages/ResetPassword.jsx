import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"
function ResetPassword() {
    const [email, setEmail] = useState("")

    const postData = () =>{
        fetch("https://quad-blog.onrender.com/api/resetpassword",{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({email})
        }).then(res=>res.json()).then(data=>{
          if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Invalid Email", classes:"#c62828 red darken-4"})
            return
        }
        if(data.error){M.toast({html:data.error,  classes:"#c62828 red darken-4"})}
        else{
          M.toast({html:data.message, classes:"#4caf50 green darken-1"})
        } 
      })
       
    }
  return (
    <div className='sign_Cont'>
        <div className="card sign_wrapper input-field" >
            <h4 className='brand-logo'>Reset Password</h4>
            <p className='page2' style={{TextAlign:"center"}}>Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <Link to="/contact">contact us.</Link> </p>
            <input type="text" value={email} placeholder='Enter your Email or username' onChange={(e)=>setEmail(e.target.value)}/>
            <button className='btn waves-effect waves-yellow #64b5f6 blue darken-2' onClick={()=>postData()}>
                Reset Password
            </button>
        </div>
    </div>
  )
}

export default ResetPassword