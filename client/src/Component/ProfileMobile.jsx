import React from 'react'
import { Link } from 'react-router-dom'

function ProfileMobile() {
  return (
    <>
    <Link to="/profile" className='link' style={{marginRight:"5px"}}>
      <div className="profile-side-container">
          <div className="profile-side-icon">
            <i className="tiny material-icons">dashboard</i>
          </div>
          <div className="profile-side-name">
              <span>Dashboard</span>
          </div>
      </div>
    </Link>

    <Link to="/profile/write" className='link' >
      <div className="profile-side-container" style={{marginRight:"10px"}}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">colorize</i>
          </div>
          <div className="profile-side-name">
            <span>Create Post</span>
          </div>
      </div>
    </Link>

    <Link to="/profile/posts" className='link' >
      <div className="profile-side-container" style={{marginRight:"10px"}}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">collections</i>
          </div>
          <div className="profile-side-name">
            <span>View Posts</span>
          </div>
      </div>
    </Link>
    
    <Link to="" className='link'>
        <div className="profile-side-container" style={{marginRight:"10px"}}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">contact_mail</i>
          </div>
          <div className="profile-side-name">
            <span>Mail</span>
          </div>
        </div>
    </Link>
  </>
  )
}

export default ProfileMobile