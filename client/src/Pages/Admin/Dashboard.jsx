import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import LastestPost from './Component/LastestPost';
import Navbar from './Component/Navbar';
import NewUser from './Component/NewUser';
import Sidebar from './Component/Sidebar';
import UserChart from './Component/UserChart';
import axios from "axios"


const drawerWidth = 240;

function Dashboard(props) {
   const [users, setUsers] = useState([])
   const [posts, setPosts] = useState([])
   useEffect(()=>{
      const getUsers = async() => {
        const user = await axios.get("http://localhost:5000/api/users")
        setUsers(user.data)
      }
      const getPosts = async() => {
        const post = await axios.get("http://localhost:5000/api/posts")
        setPosts(post.data)
      }
      getUsers()
      getPosts()
   },[])
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
                        <Link to="/admin/users" className='link'>
                          <div className="col s12 m3 z-depth-1 hoverable" style={{marginLeft:"25px", marginRight:"25px" ,marginBottom:"10px" ,cursor:"pointer"}} >
                            <h6 >Number Of Users</h6>
                            <div style={{display:"flex"}}>
                              <i className='small material-icons' style={{marginRight:"5px"}}>group</i>
                              <p style={{margin:"0px", fontSize:"20px"}}>   {users.length}</p>
                            </div>
                          </div>
                        </Link>
                        <Link to="/admin/posts" className='link'>
                          <div className="col s12 m3 z-depth-1 hoverable" style={{marginLeft:"25px", marginRight:"25px", marginBottom:"10px",cursor:"pointer"}}>
                            <h6>Number Of Posts</h6>
                            <div style={{display:"flex"}}>
                              <i className='small material-icons' style={{marginRight:"5px"}}>library_books</i>
                              <p style={{margin:"0px", fontSize:"20px"}}>{posts.length}</p>
                            </div>
                          </div>
                        </Link>  
                      <div className="col s12 m3 z-depth-1 hoverable" style={{marginLeft:"25px", marginRight:"25px",cursor:"pointer"}}>
                        <h6>Number Of Active Users</h6>
                        <div style={{display:"flex"}}>
                            <i className='small material-icons'>person</i>
                            <p style={{margin:"0px", fontSize:"20px"}}>  500</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row z-depth-1" style={{marginLeft:"15px", marginRight:"15px"}}>
                    <UserChart/>
                </div>
                <div className="row " style={{marginLeft:"15px", marginRight:"15px"}}>
                    <div className="col s12 m5 z-depth-1" style={{marginRight:"2%",marginLeft:"3%"}}><NewUser data={users}/></div>
                    <div className="col s12 m6 z-depth-1"><LastestPost/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard