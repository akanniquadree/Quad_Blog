import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const postData = () =>{
        
    }
  return (
    <div className='sign_Cont '>
        <div className="card sign_wrapper input-field #f5f5f5" >
            <p className='brand-logo page' style={{marginBottom:"10px"}}>Contact us</p>
            <div className="row">
                <div className="col s12">
                    <input type="text" value={name} placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col s12">
                        <input type="text" value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                <div className="col s12">
                    <input type="text" value={phone} placeholder='Enter your Phone No' onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="col s12">
                    <input type="text" id="subject" value={subject} placeholder='Enter The Subject of the Message' onChange={(e)=>setSubject(e.target.value)}/>
                </div>
                <div class="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Message</label>
                </div>
                <div className="col s12">
                    <button className='btn waves-effect waves-yellow #64b5f6 blue darken-2' onClick={()=>postData()}>
                            Send Mesaage
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact