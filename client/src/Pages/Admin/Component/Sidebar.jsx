import React from 'react'
import {Link} from "react-router-dom"


function Sidebar() {
  return (
    <div className='mobiles #f5f5f5  z-depth-3 grey lighten-4'>
    <Link to="/admin" className='link'>
      <div className="profile-side-container">
          <div className="profile-side-icon">
            <i className="tiny material-icons">dashboard</i>
          </div>
          <div className="profile-side-name">
              <span>Dashboard</span>
          </div>
      </div>
    </Link>

    <Link to="" className='link'>
      <div className="profile-side-container">
          <div className="profile-side-icon">
            <i className="tiny material-icons">colorize</i>
          </div>
          <div className="profile-side-name">
            <span>Create Post</span>
          </div>
      </div>
    </Link>

    <Link to="" className='link'>
      <div className="profile-side-container">
          <div className="profile-side-icon">
            <i className="tiny material-icons">collections</i>
          </div>
          <div className="profile-side-name">
            <span>View Posts</span>
          </div>
      </div>
    </Link>
    
    <Link to="" className='link'>
        <div className="profile-side-container">
          <div className="profile-side-icon">
            <i className="tiny material-icons">contact_mail</i>
          </div>
          <div className="profile-side-name">
            <span>Mail</span>
          </div>
        </div>
    </Link>
  </div>
  )
}

export default Sidebar