import React from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom"



function Sidebar() {
  const history = useLocation()
  return (
    <div className='mobiles z-depth-2 #fafafa grey lighten-5'>
    <Link to="/admin" className='link' >
      <div className={`profile-side-container ${history.pathname === "/admin" ? "sactive": ""}`}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">dashboard</i>
          </div>
          <div className="profile-side-name">
              <span>Dashboard</span>
          </div>
      </div>
    </Link>

    <Link to="/admin/posts" className='link'>
      <div className={`profile-side-container ${history.pathname === "/admin/posts" ? "sactive": ""}`}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">collections</i>
          </div>
          <div className="profile-side-name">
            <span>View All Posts</span>
          </div>
      </div>
    </Link>

    <Link to="/admin/users" className='link'>
      <div className={`profile-side-container ${history.pathname.startsWith("/admin/users") ? "sactive": ""}`}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">group</i>
          </div>
          <div className="profile-side-name">
            <span>Users</span>
          </div>
      </div>
    </Link>
    
    <Link to="" className='link' >
        <div className="profile-side-container"style={{marginBottom:"450px"}}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">contact_mail</i>
          </div>
          <div className="profile-side-name">
            <span>Mail</span>
          </div>
        </div>
    </Link>
    <Link to="/profile" className='link'>
      <div className={`profile-side-container `}>
          <div className="profile-side-icon">
            <i className="tiny material-icons">code</i>
          </div>
          <div className="profile-side-name">
            <span>Switch To User</span>
          </div>
      </div>
    </Link>
  </div>
  )
}

export default Sidebar