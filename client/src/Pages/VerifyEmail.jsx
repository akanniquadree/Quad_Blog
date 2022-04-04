import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import axios from "axios"

function VerifyEmail() {
    const [validUrl, setValidUrl] = useState(false)
    const params = useParams()
    useEffect(()=>{
        const verifyEmail = async() =>{
            try {
                const url = `http://localhost:5000/api/users/${params.id}/verify/${params.token}`
                const {data} = await axios.get(url)
                if(data){
                    console.log(data)
                    console.log(validUrl)
                    setValidUrl(true)
                }
                
            } catch (error) {
                console.log(error)
                setValidUrl(false)
            }
        }
        verifyEmail()
    },[])
  return (
    <div>
        {validUrl ?(
            <div className="verify-container">
                <img src="/images/verify.png" alt="Verify" className='verify-image'/>
                <h1 className='verify-h1'>Email Successfully Verified</h1>
                <Link to="/signin">
                    <button className='btn-large waves-effect wave-light #64b5f6 blue lighten-2'>Login</button>
                </Link>
            </div>
         ):
        (<h1>Page Not Found</h1>)}
    </div>
  )
}

export default VerifyEmail