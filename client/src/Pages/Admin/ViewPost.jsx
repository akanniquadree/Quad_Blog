import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import UserChart from './Component/UserChart'
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"


function ViewPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const getPost = async() =>{
            const post = await axios.get("http://localhost:5000/api/posts")
            setPosts(post.data)
            console.log(posts)
        }
        getPost()
    },[])
    const columns = [
        //   { field: 'id', headerName: 'ID', width: 40 },
          { field: 'title', headerName: 'Post', width: 250, renderCell: (params)=>{
                return(
                    <div style={{display:"flex", alignItems:"center"}}>{
                        <img src={params.row.image} alt="" style={{width:"50px",height:"45px",marginRight:"10px", objectFit:"cover", borderRadius:"50%"}}/> 
                        }
                        {
                            params.row.title
                        }
                    </div>
                )
          } },
          { field: 'desc', headerName: 'Description', width:200,},
          { field: 'username', headerName: 'Username', width: 200,},
          { field: 'date', headerName: 'Date', width: 200, renderCell: (params)=>{
            return(
                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{marginRight:"10px",}}>{params.row.date}</div> 
                    {
                        params.row.time
                    }
                </div>
            )
      }},
          { field: 'action', headerName: 'Action', width: 90, renderCell: (params)=>{
              return(
                    <div>
                        <Link className='link' to={`/admin/posts/${params.row.id}`}><i className='tiny material-icons'  style={{marginRight:"5px",color:"green",cursor:"pointer"}}>edit</i></Link>           
                        
                        <i className='tiny material-icons modal-trigger' style={{marginRight:"5px",color:"red",cursor:"pointer"}} data-target="modal3">delete</i>
                    </div>
                )
          }},
         
        ];
        const trim = posts?.map(post=>{
            return{
                id: post?._id,
                title: post?.title,
                image: post?.image,
                username:post?.user.name,
                desc: post?.desc,
                cat:post?.category.name,
                date: new Date(post.createdAt).toDateString(),
                time: new Date(post.createdAt).toLocaleTimeString(),
            }
        })
  return (
    <div>
        <Navbar/>
        <div className="row">    
            <div className="col s12 m2  mobile">
                <Sidebar/>
            </div>
            <div className="col s12 m10">
                <div className="row">
                    <div className="col s12 profileS" >
                        <h4 className='profilelogo'>View All Posts</h4>
                    </div>
                </div>
                <div className="row z-depth-1" style={{marginLeft:"15px", marginRight:"15px"}}>
                    <UserChart/>
                </div>
                <div className="row" style={{marginLeft:"8px", marginRight:"10px"}}>
                    <div className="col s12" >
                        <div className=" z-depth-1" style={{ height: 370, width: '100%', marginTop:"20px" }}>
                            <DataGrid style={{fontSize:"12px"}}
                                rows={trim}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                disableSelectionOnClick
                            />
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPost