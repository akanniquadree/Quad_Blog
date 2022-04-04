import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from "materialize-css"
import { UserContext } from '../Context/action'

function Navbar() {
    const sidebar = useRef(null)
    const {state, dispatch} = useContext(UserContext)
    const history = useNavigate()
    useEffect(()=>{
        M.Sidenav.init(sidebar.current)
    },[])

  return (
    <div className='navbar-fixed'>
    <nav>
        <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signup" } className="brand-logo logo left" style={{color:"black"}}>QUADBLOG</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger right" style={{color:"black"}}><i className="large material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="sass.html"><i className="material-icons large" style={{color:"black", cursor:"pointer"}}>search</i></Link></li>
                {state && <li><Link className='link' to="/profile">Profile</Link></li>}
                <li><Link className='link' to="/about">About Us</Link></li>
                <li><Link className='link'to="/contact">Contact Us</Link></li>
                {state  ?
                <li><button className='btn #c62828 red lighten-1 navbut' onClick={()=>{
                    localStorage.clear(); dispatch({type:"CLEAR"}); history("/signin")
                }}>Log Out</button></li>:
                <>
                    <li><Link className='link' to="/signin">Sign In</Link></li> 
                    <li><Link className='link' to="/signup">Sign Up</Link></li>
                </>
                }
            </ul>
        </div>


        <ul className="sidenav navside" ref={sidebar} id="mobile-demo" style={{color:"black"}}>
            <li className='md'><Link to="sass.html" ><i className="material-icons" style={{color:"black", cursor:"pointer",marginLeft:"4px"}}>search</i></Link></li>
            {state && <li className='md'><Link to="/profile" style={{fontStyle:"2rem"}}>Profile</Link></li>}
            <li className='md'><Link to="/about" style={{fontStyle:"2rem"}}>About Us</Link></li>
            <li className='md'><Link to="/contact" style={{fontStyle:"2rem"}}>Contact Us</Link></li>
            {state  ?
                <li className='md'>
                    <button className='btn #c62828 red lighten-1 sidebut' onClick={()=>{
                        localStorage.clear(); dispatch({type:"CLEAR"}); history("/signin")}}>Log Out
                    </button>
                </li>:
                <>
                <li className='md'><Link style={{fontStyle:"2rem"}} to="/signin">Sign In</Link></li> 
                <li className='md'><Link style={{fontStyle:"2rem"}} to="/signup">Sign Up</Link></li>
            </>
            }
        </ul>
  </nav> 
  </div>
  )
}

export default Navbar