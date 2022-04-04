import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/action';
import M from "materialize-css"
import { useNavigate } from 'react-router-dom';




function ChangePictureModal() {
    const {state, dispatch} = useContext(UserContext)
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const history = useNavigate()
    useEffect(()=>{
        if(image){
            const form = new FormData()
            form.append("file", image)
            form.append("upload_preset", "QuadBlog")
            form.append("cloud_name", "youngdollar")
            fetch("https://api.cloudinary.com/v1_1/youngdollar/image/upload",{
                method:"post",
                body:form
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            localStorage.setItem("user", JSON.stringify({...state,pic:data.url}))
            dispatch({type:"UPDATEPIC", payload:data.url})
            fetch("http://localhost:5000/api/updatepic",{
                method:"put",
                headers:{"Content-Type":"application/json", "authorization": "Bearer " +localStorage.getItem("token")},
                body:JSON.stringify({pic:data.url})
            }).then(res=>res.json()).then(data=>{
            if(data.error){
               M.toast({html:data.error,  classes:"#c62828 red darken-4"})
               return 
            }else{
                M.toast({html:data.message, classes:"#4caf50 green darken-1"})
                window.location.reload(true)
            }}).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
        }
    },[image])
    const updatePhoto = (file) =>{
        setImage(file)
      }
  return (
    <>
        <div className="row">
            <div className="col s12"> 
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-2">
                    <span >Upload Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
                {/* <div className="settingsPP">
                   <img src="/images/caro1.jpg" alt="" />

                    
                    <label htmlFor="fileInput">
                        <i className='small material-icons settingsPPIcon'>person_add</i>
                    </label>
                    <input type="file" name="" id="fileInput"style={{display:"none"}} onChange={(e)=>setImage(e.target.value)}/>
                    
                </div> */}
            </div>
        </div>
        <div className="row">
            <div className="col s12 settingsPP">
                <button className='btn-small waves-effect wave-light #64b5f6 blue darken-2' onClick={()=>updatePhoto()}>
                        Upload
                </button>
            </div>
        </div>
    </>
  )
}

export default ChangePictureModal