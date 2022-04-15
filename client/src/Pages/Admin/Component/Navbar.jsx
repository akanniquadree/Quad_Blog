import React from 'react'
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className='navbar-fixed'>
        <nav>
            <div className="nav-wrapper white">
                <Link to="" className="brand-logo logo left" style={{color:"black"}}>QUADBLOG</Link>
                <Link to="#" data-target="mobile-demo" className="sidenav-trigger left" style={{color:"black", marginLeft: "1px"}}><i className="large material-icons">menu</i></Link>
                <ul className="right ">
                   <li><i className='tiny material-icons black-text'>notifications</i></li>
                   <li><i className='tiny material-icons black-text'>eject</i></li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}
