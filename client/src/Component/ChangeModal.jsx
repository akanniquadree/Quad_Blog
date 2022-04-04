import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"

function ChangeModal() {
  const [old, setOld] = useState("")
  const [new1, setNew1] = useState("")
  const [new2, setNew2] = useState("")
  const changePassword = (e) =>{
      fetch("http://localhost:5000/api/changepassword",{
        method:"put",
        headers:{
          "Content-Type":"application/json",
          "Authorization": "Bearer " +localStorage.getItem("token")
        },
        body:JSON.stringify({old, new1, new2})
      }).then((res)=>res.json()).then((data)=>{
        if(data.error){
          console.log(data.error)
          M.toast({html: data.error, classes:"#c62828 red darken-4"})
          return
        }
        else if(data.message){
          M.toast({html:data.message, classes:"#4caf50 green darken-1"})
          window.location.reload(true)
        }
      }).catch(err=>console.log(err))
  }
  return (
    <>
          <div className="row">
            <div className="col s12"> 
              <div className="input-field col s12">
                <input id="old" type="password" className="validate" value={old} onChange={(e)=>setOld(e.target.value)}/>
                <label htmlFor="old">Old Password</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12"> 
              <div className="input-field col s12">
                <input id="new1" type="password" className="validate" value={new1} onChange={(e)=>setNew1(e.target.value)}/>
                <label htmlFor="password">New Password</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12"> 
              <div className="input-field col s12">
                <input id="new2" type="password" className="validate" value={new2} onChange={(e)=>setNew2(e.target.value)}/>
                <label htmlFor="password">Confirm Password</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12"> 
              <button className='btn-small waves-effect wave-light #64b5f6 blue darken-2' onClick={()=>changePassword()}>
                        Change
                </button>
            </div>
        </div>
    </>
  )
}

export default ChangeModal