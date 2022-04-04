import React from 'react'
import { Link } from 'react-router-dom'

function DeletePostModal() {
  const deletePost = () =>{

  }
  return (
    <div>
          <div className="modal-content">
            <h4>Delete Your Post</h4>
            <p>Are you sure you want to delete your account</p>
          </div>
          <div className="modal-footer">
            <Link to="#" className="modal-close waves-effect waves-green btn-flat">No</Link>
            <button onClick={()=>{
              deletePost()
            }} href="#!" className="waves-effect waves-red btn-flat">Yes</button>
          </div>

    </div>
  )
}

export default DeletePostModal