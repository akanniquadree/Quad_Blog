import React, { useContext, useEffect, useRef, useState } from 'react'
import {Link} from "react-router-dom"
import UserProfileSide from './UserProfileSide'
import { DataGrid } from '@mui/x-data-grid';
import DeleteModal from '../Component/DeleteModal';
import M from "materialize-css"
import ProfileMobile from '../Component/ProfileMobile';
import { UserContext } from '../Context/action';
import DeletePostModal from '../Component/DeletePostModal';
import { useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Posts() {
    const {id} = useParams()
    const modal = useRef(null)
    const modal3 = useRef(null)
    const side = useRef(null)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  useEffect(()=>{
    M.Modal.init(modal.current)
    M.Sidenav.init(side.current)
    M.Modal.init(modal3.current)
    fetch(`http://localhost:5000/api/user/post/${id}`,{
        method:"get",
        headers:{
            "Content-Type" : "application/json",
            "authorization":"Bearer " +localStorage.getItem("token")
        },
    }).then(res=>res.json()).then(result=>{
        setData(result);
        if(result.error){ 
        M.toast({html: result.error, classes:"#c62828 red darken-4"})
        return}
    }).catch(err=>console.log(err))
  },[])


  
const columns = [
    //   { field: 'id', headerName: 'ID', width: 40 },
      { field: 'title', headerName: 'Title', width: 200 },
      { field: 'image', headerName: 'Image', width: 100, renderCell: (params)=>{
            return(
                <div>{
                    <img src={params.row.image} alt="" style={
                        {
                            width:"50px",height:"45px", objectFit:"cover", borderRadius:"50%"
                        }
                    }/> 
                    }
                    
                </div>
            )
      } },
      { field: 'desc', headerName: 'Description', width:300,},
      { field: 'cat', headerName: 'Category', width: 100,},
      { field: 'date', headerName: 'Date', width: 90,},
      { field: 'action', headerName: 'Action', width: 90, renderCell: (params)=>{
          return(
                <div>
                    <Link className='link' to={`/profile/write/edit/${params.row.id}`}><i className='tiny material-icons'  style={{marginRight:"5px",color:"green",cursor:"pointer"}}>edit</i></Link>           
                    
                    <i className='tiny material-icons' style={{marginRight:"5px",color:"red",cursor:"pointer"}} onClick={handleOpen}>delete</i>
                    {/* Delete Post Modal PopUp */}
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <DeletePostModal id={params.row.id} close={handleClose} setData={setData} data={data}/>
                            </Box>
                        </Modal>
                    {/* Delete Modal PopUp */}
                </div>
            )
      }},
     
    ];
    
  
  const trim = data?.map(post=>{
      return{
          id: post?._id,
          title: post?.title,
          image: post?.image,
          desc: post?.desc,
          cat:post?.category.name,
          date: new Date(post.createdAt).toDateString(),
      }
  })
  return (
    <div>
        <div className="row">
            <div className="col s12 m2 mobile" style={{height:"100vh"}}>
                <UserProfileSide/>
            </div>
            <div className="col s12 m10">
                <div className="row single_row">
                    <div className="col s5 m6 profileS" >
                        <Link to="#" data-target="slide-out" className="sidenav-trigger desktop link"><i className="material-icons" style={{marginTop:"17px", marginRight:"15px"}}>menu</i></Link>
                        <h4 className='profilelogo'>View Post</h4>
                    </div>
                    <div className="col s7 m6 profileJustify">
                        <Link to="/profile/edit" className="link"><span style={{fontWeight:"500",lineHeight:"2px",fontSize:"15px"}}>Edit</span><i className="tiny material-icons" style={{color:"green"}}>edit</i></Link>
                        <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 red darken-2 modal-trigger' data-target="modal1">Delete Account</button>
                    </div>
                </div>
                <div className="row z-depth-2" style={{marginLeft:"2%",marginRight:"1%"}}>
                    <div className="col s12">
                    <div style={{ height: 580, width: '100%', marginTop:"10px" }}>
                        <DataGrid style={{fontSize:"8px"}}
                            rows={trim}
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
        {/* Delete Modal PopUp */}
        <div id="modal1" className="modal" ref={modal}>
          <DeleteModal/>
        </div>
        
        {/* Mobile side view PopUP */}
        <div id="slide-out" className="sidenav profile_slide z-depth-3" ref={side}>
            <ProfileMobile/>
          </div>
        {/* Mobile side view PopUP */}
    </div> 
  )
}

export default Posts