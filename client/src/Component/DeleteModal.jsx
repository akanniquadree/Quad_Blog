import React from 'react'
import { Link } from 'react-router-dom'

function DeleteModal() {
  return (
    <div>
          <div className="modal-content">
            <h4>Delete Your Account</h4>
            <p>Are you sure you want to delete your account</p>
          </div>
          <div className="modal-footer">
            <Link to="#" className="modal-close waves-effect waves-green btn-flat">No</Link>
            <a href="#!" className="modal-close waves-effect waves-red btn-flat">Yes</a>
          </div>

    </div>
  )
}

export default DeleteModal