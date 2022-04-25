import React, { useContext, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserProfileSide from './UserProfileSide'
import M from "materialize-css"
import DeleteModal from '../Component/DeleteModal'
import ProfileMobile from '../Component/ProfileMobile'
import { UserContext } from '../Context/action'

function Profile() {
  const {state, dispatch} = useContext(UserContext)
  const modal = useRef()
  const side = useRef()
  const {id} = useParams()
  useEffect(()=>{
    M.Modal.init(modal.current)
    M.Sidenav.init(side.current)
  })

  return (
    <div>
      <div className="row">
        <div className="col s12 m2  mobile">
         <UserProfileSide/>
        </div>
        <div className="col s12 m10">
          <div className="row single_row">
            <div className="col s4 m6 profileS" >
              <Link to="#" data-target="slide-out" className="sidenav-trigger desktop link"><i className="material-icons" style={{marginTop:"17px", marginRight:"15px"}}>menu</i></Link>
              <h4 className='profilelogo'>Profile</h4>
            </div>
            <div className="col s8 m6 profileJustify">
              <Link to="/profile/edit" className="link" ><span style={{fontWeight:"500",lineHeight:"2px",fontSize:"15px"}} className="">Edit</span><i className="tiny material-icons" style={{color:"green"}}>edit</i></Link>
              <button className='btn-small btn_desk waves-effect waves-yellow #64b5f6 red darken-2 modal-trigger' data-target="modal1">Delete Account</button>
            </div>
          </div> 
          <div className="row z-depth-2" style={{marginLeft:"2%",marginRight:"1%"}}>
              <div className="col s12" style={{marginTop:"20px"}}>
                <div className="row" >
                  <div className="col s12 m3 image_center" >
                  <img src={state.pic} width={150} height={150} className="w3-border w3-padding"  alt="logo"/>
                  </div>
                  <div className="col s12 m9">
                    <div className='profile_name'>
                          <div style={{display: "flex"}}>
                              <span className='profileH4'>{state? state.name: "name"}</span>
                          </div>
                          <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>{state ? state.username : "username"}</span>
                          {/* <span style={{color: "#aaa", margin:"1px, 0", fontSize:"13px" }}>{state ? state.email : "email"}</span> */}
                          <p style={{margin:"0", fontSize:"13px", whiteSpace:"pre-line"}}>{
                            state.quote
                          }
                          </p>
                      </div>   
                  </div>
                </div>
              </div>
              <div className="col s12 profileDiv">
                <span className='search' style={{marginBottom:"5px", fontWeight:"bolder"}}>Biography:</span>
              </div>
              <div className="col s12 profileDiv">
                <p style={{margin:"0", fontSize:"13px", whiteSpace:"pre-line", textAlign:"justify"}}>
                        {state.bio}
                </p>
                <hr/>
              </div>
              <div className="col s12 profileDiv">
                 <span style={{marginBottom:"5px", fontWeight:"bolder"}} className='search'>Education:</span>
              </div>
              <div className="col s12 profileDiv">
                  <ul style={{margin:"0", fontSize:"13px", marginBottom:"10px", whiteSpace:"pre-line"}}>
                        {
                            state.cert
                        }
                    </ul>

              </div>
      
            </div>       
        </div>
      </div>
        {/* Delete Modal PopUp */}
        <div id="modal1" className="modal" ref={modal}>
          <DeleteModal/>
        </div>
        {/* Delete Modal PopUp */}
        {/* Mobile side view PopUP */}
          <div id="slide-out" className="sidenav profile_slide z-depth-3" ref={side}>
            <ProfileMobile/>
          </div>
        {/* Mobile side view PopUP */}
      </div>
  )
}

export default Profile