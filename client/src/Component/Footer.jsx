import React from 'react'
import {Link} from "react-router-dom"

function Foter() {
  return (
    <div>
        <footer className="page-footer #1c2522 grey darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link className="grey-text text-lighten-3" to="/profile">Profile</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/about">About</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey darken-4">
            <div className="container">
            © 2022 Copyright Young Dollar
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Foter