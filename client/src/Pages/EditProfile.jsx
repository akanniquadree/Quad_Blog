import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import UserProfileSide from './UserProfileSide'
import M from "materialize-css"
import ProfileMobile from '../Component/ProfileMobile'
import ChangeModal from '../Component/ChangeModal'
import { UserContext } from '../Context/action'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ChangePictureModal from '../Component/ChangePictureModal'


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
const style2 = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EditProfile(props) {
  const {state, dispatch} = useContext(UserContext)
  const [name, setName] = useState(state.name);
  const [username, setUsername] = useState(state.username);
  const [bio, setBio] = useState(state.bio);
  const [cert, setCert] = useState(state.cert);
  const [quote, setQuote] = useState(state.quote);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const side = useRef(null)
  const change = useRef(null)
  const history = useNavigate()
  const history1 = useLocation()
  
  useEffect(()=>{
    // M.Sidenav.init(side.current)
    // M.Modal.init(change.current)
  })
 const updatePost = () => {
  
    fetch("https://quad-blog.onrender.com/api/update",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization" : "Bearer " +localStorage.getItem("token")
      },
      body:JSON.stringify({name, username, bio, cert, quote})
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.error){
        M.toast({html:data.error,  classes:"#c62828 red darken-4"})
        return 
     }else{
         M.toast({html:"Profile Updated Successfully", classes:"#4caf50 green darken-1"})
         localStorage.setItem("user", JSON.stringify({...state, bio:data.bio,name:data.name, username:data.username,cert:data.cert, quote:data.quote}))
        window.location.replace("/profile")
     }
    }).catch(err=>console.log(err))
 }


  return (
    <div>
      <div className="row">
        <div className="col s12 m2 mobile">
         <UserProfileSide/>
        </div>
        <div className="col s12 m10">
          <div className="row single_row">
            <div className="col s1 m5 profileS" >
              <Link to="#" data-target="slide-out" className="sidenav-trigger desktop link"><i className="material-icons" style={{marginTop:"17px", marginRight:"15px"}}>menu</i></Link>
             
            </div>
            <div className="col s11 m6 profileJustify">
              <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 blue darken-2' onClick={handleOpen}>Set Profile Picture</button>
              <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 blue darken-2' onClick={handleOpen2}>Change Password</button>
            </div>
          </div>
          <div className="row " style={{marginLeft:"2%",marginRight:"1%"}}>
              <div className="col s12 z-depth-2" style={{marginTop:"20px"}}>
                  <form className="settingsForm" onSubmit={(e)=>{e.preventDefault(); updatePost()}}>
                    
                    <div className="row">
                      <div className="col s12 m6 "style={{marginTop:"5px"}}>
                        <div className="row">
                          <div className="col s12">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder={state.name} value={name} onChange={(e)=>setName(e.target.value)} required/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder={state.username} value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <label htmlFor="username">Favourite Quote</label>
                            <textarea placeholder={state.quote} value={quote} onChange={(e)=>setQuote(e.target.value)} required className="materialize-textarea" data-length="120"></textarea>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m6" style={{marginTop:"5px"}}>
                        <div className="row">
                          <div className="col s12">
                            <label htmlFor="name">Biography</label>
                            <textarea placeholder={state.bio} value={bio} onChange={(e)=>setBio(e.target.value)} required className="materialize-textarea"></textarea>
                        
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <label htmlFor="name">Certification</label>
                            <textarea  placeholder={state.cert} value={cert} onChange={(e)=>setCert(e.target.value)} required className="materialize-textarea"></textarea>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <button type='submit' className='btn-large btn_desk waves-effect waves-yellow #64b5f6 blue darken-2' >Update</button>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </form>
              </div>
          </div> 
        </div> 
      </div> 
      {/* Mobile side view PopUP */}
          <div id="slide-out" className="sidenav profile_slide z-depth-3" ref={side}>
            <ProfileMobile/>
          </div>
        {/* Mobile side view PopUP */}
        {/* Password Modal PopUp */}
        <Modal open={open2} onClose={handleClose2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style2}>
            <ChangeModal/>
            </Box>
        </Modal>
        {/* password Modal PopUp */}
        {/* ProfilePicture Modal PopUp */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <ChangePictureModal/>
            </Box>
        </Modal>
        {/* profilePicture Modal PopUp */}
    </div>
  )
}

export default EditProfile