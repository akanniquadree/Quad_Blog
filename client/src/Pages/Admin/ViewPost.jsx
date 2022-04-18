import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import UserChart from './Component/UserChart'

function ViewPost() {
    const columns = [
        //   { field: 'id', headerName: 'ID', width: 40 },
          { field: 'title', headerName: 'Post', width: 250, renderCell: (params)=>{
                return(
                    <div style={{display:"flex", alignItems:"center"}}>{
                        <img src={params.row.image} alt="" style={{width:"50px",height:"45px",marginRight:"10px", objectFit:"cover", borderRadius:"50%"}}/> 
                        }
                        {
                            params.row.name
                        }
                    </div>
                )
          } },
          { field: 'desc', headerName: 'Description', width:200,},
          { field: 'username', headerName: 'Username', width: 200,},
          { field: 'post', headerName: 'Post', width: 150,},
          { field: 'date', headerName: 'Date', width: 120,},
          { field: 'action', headerName: 'Action', width: 90, renderCell: (params)=>{
              return(
                    <div>
                        <Link className='link' to={`/profile/write/edit/${params.row.id}`}><i className='tiny material-icons'  style={{marginRight:"5px",color:"green",cursor:"pointer"}}>edit</i></Link>           
                        
                        <i className='tiny material-icons modal-trigger' style={{marginRight:"5px",color:"red",cursor:"pointer"}} data-target="modal3">delete</i>
                    </div>
                )
          }},
         
        ];
    const rows=[
        { id: 1, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 2, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 3, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 4, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 5, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 6, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 7, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 8, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 9, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 10, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
        { id: 11, title:"John", desc: 'Snow', image: '/images/caro2.jpg', username: "travel", date:"oct 2020"},
    ]
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
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                              
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