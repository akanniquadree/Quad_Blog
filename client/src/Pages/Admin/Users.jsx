import React, {useState, useEffect} from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([])
   
   useEffect(()=>{
      const getUsers = async() => {
        const user = await axios.get("http://localhost:5000/api/users")
        setUsers(user.data)
      }
      getUsers()
   },[])
    const columns = [
        //   { field: 'id', headerName: 'ID', width: 40 },
          { field: 'name', headerName: 'User', width: 250, renderCell: (params)=>{
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
          { field: 'email', headerName: 'Email', width:200,},
          { field: 'username', headerName: 'Username', width: 200,},
          { field: 'post', headerName: 'Post', width: 80,},
          { field: 'date', headerName: 'Date', width: 190, renderCell: (params)=>{
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
                        <Link className='link' to={`/admin/users/${params.row.id}`}><i className='tiny material-icons'  style={{marginRight:"5px",color:"green",cursor:"pointer"}}>edit</i></Link>           
                        
                        <i className='tiny material-icons modal-trigger' style={{marginRight:"5px",color:"red",cursor:"pointer"}} data-target="modal3">delete</i>
                    </div>
                )
          }},
         
        ];
    const rows= users?.map((itm, idx)=>{
        return{
            id: itm?._id,
            name: itm?.name,
            image:itm?.pic,
            email:itm?.email,
            username:itm?.username,
            date:new Date(itm?.createdAt).toDateString(),
            time:new Date(itm?.createdAt).toLocaleTimeString()
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
                    <div className="col s12">
                        <div className=" z-depth-1" style={{ height: 570, width: '100%', marginTop:"20px" }}>
                            <DataGrid style={{fontSize:"12px"}}
                                rows={rows}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
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

export default Users