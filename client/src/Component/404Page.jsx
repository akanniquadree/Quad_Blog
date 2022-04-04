import React from 'react'
import { Link } from 'react-router-dom'

function NotPage() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="blank-content-header ">
                        <h3>The page you are looking for was not found.</h3>
                    </div>
                    <div className=" text-center">
                        <h4>Sorry For The Inconvenience.</h4>
                        <p>Search again what you are looking for</p>
                        <Link to="/">Go To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotPage