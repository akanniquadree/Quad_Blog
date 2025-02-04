import React from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"
import axios from "axios"


function DeletePostModal({id, close, setData, data}) {
  const deletePost = async() =>{
    await axios.delete(`https://quad-blog.onrender.com/api/post/${id}`, {headers:{"authorization":"Bearer " +localStorage.getItem("token")}}).then(result=>{
      if(result.error){ 
        M.toast({html: result.error, classes:"#c62828 red darken-4"})
        return
      }
      M.toast({html: result.message, classes:"#c62828 red darken-4"})
      const newData = data.filter(item=>{
          if(item._id === result._id){
              return result
          }else{
              return item
          }
      })
      setData(newData)
      window.location.reload()
  }).catch(err=>console.log(err))
  }
  
  return (
    <div>
          <div className="modal-content">
            <h4>Delete Your Post</h4>
            <p>Are you sure you want to delete This post</p>
          </div>
          <div className="modal-footer" style={{display:"flex",justifyContent:"space-between"}}>
            <Link to="#" className="waves-effect waves-green btn-flat" onClick={close}>No</Link>
            <button onClick={()=>{deletePost()}} href="#!" className="waves-effect waves-red btn-flat">Yes</button>
          </div>

    </div>
  )
}

export default DeletePostModal