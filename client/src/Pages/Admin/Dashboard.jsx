import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';


const drawerWidth = 240;

function Dashboard(props) {
   
  return (
    <div>
        <Navbar/>
        <div className="row">    
            <div className="col s12 m2  mobile">
            <Sidebar/>
            </div>
            <div className="col s12 m10">
                <div className="row">
                  <div className="col s12 m10 offset-m1">
                    <div className="row" style={{marginTop:"15px"}}>
                      <div className="col s12 m3 z-depth-1 hoverable" style={{marginLeft:"25px", marginRight:"25px" ,marginBottom:"10px"}} >
                        <h6 >Number Of Users</h6>
                        <div style={{display:"flex"}}>
                          <i className='small material-icons'>group</i>
                          <p style={{margin:"0px", fontSize:"20px"}}>  500</p>
                        </div>
                      </div>
                      <div className="col s12 m3 z-depth-1 hoverable" style={{marginLeft:"25px", marginRight:"25px", marginBottom:"10px"}}>
                        <h6>Number Of Posts</h6>
                        <div style={{display:"flex"}}>
                          <i className='small material-icons'>library_books</i>
                          <p style={{margin:"0px", fontSize:"20px"}}>  500</p>
                        </div>
                      </div>
                      <div className="col s12 m3 z-depth-1 hoverable" style={{marginLeft:"25px", marginRight:"25px"}}>
                        <h6>Number Of Active Users</h6>
                        <div style={{display:"flex"}}>
                            <i className='small material-icons'>person</i>
                            <p style={{margin:"0px", fontSize:"20px"}}>  500</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard