import React, {useState, useEffect,useRef,useContext} from 'react'
import M from "materialize-css"
import { Link } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Carousel from '../Component/Carousel'
import HomeSidebar from '../Component/HomeSidebar'
import axios from "axios"
import {useParams} from "react-router-dom"
import NotPage from '../Component/404Page'
import { UserContext } from '../Context/action'
import PictureModal from '../Component/PictureModal'


const style = {
    position: 'absolute',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height:"70%",
    cursor:"zoom-out",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 1,
  };

function SinglePage() {
    const {state} = useContext(UserContext)
    const [post, setPost] = useState({})
    const [items, setItems] =useState([])
    const [text, setText] =useState("")
    const [cats, setCats] = useState({})
    const [open, setOpen] = useState(false);
    const [validUrl, setValidUrl] = useState(false)
    const {id} = useParams()
    const {name} = useParams()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(()=>{
        const getPost = async() =>{
            const data = await axios.get(`http://localhost:5000/api/post/${id}`)
            setPost(data.data)
            setValidUrl(true)
            console.log(data)
        }
        // const getCats = async() =>{
        //     const posts = await axios.get(`http://localhost:5000/api/category/${post.category.name}`)
        //     setCats(posts.data)
        //     setValidUrl(true)
            
        // }
        // getCats()
        getPost()
      },[items])
      console.log(cats)
    const like = (id) =>{
        fetch("http://localhost:5000/api/like",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " +localStorage.getItem("token")},
            body:JSON.stringify({
                postId:id    
            })
         }).then(res=>res.json()).then(result=>{
            if(result.error){M.toast({html:result.error,  classes:"#c62828 red darken-4"});return}
            const newData = items.map((item)=>{
            if(item._id === result._id){
                return result
            }else{
                return item
            }
        })
        setItems(newData)
    }  ).catch(err=>console.log(err))
    }
    const unlike = (id) =>{
        fetch("http://localhost:5000/api/unlike",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " +localStorage.getItem("token")},
            body:JSON.stringify({
                postId:id    
            })
         }).then(res=>res.json()).then(result=>{
            if(result.error){M.toast({html:result.error,  classes:"#c62828 red darken-4"});return}
            const newData = items.map((item)=>{
            if(item._id === result._id){
                return result
            }else{
                return item
            }
        })
        setItems(newData)
    }  ).catch(err=>console.log(err))
    }
    const comment = (postId) =>{
        try {
            fetch("http://localhost:5000/api/comment",{
                method:"put",
                headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " +localStorage.getItem("token")
                },
                body:JSON.stringify({
                postId,
                text
                })
            }).then(res=>res.json()).then(result=>{
                if(result.error){M.toast({html:result.error,  classes:"#c62828 red darken-4"});return}
            const newData = items.map((item)=>{
                if(item._id === result._id ){
                    return result
                }else{
                    return item
                }
            })
            setItems(newData)
        })
        } catch (error) {
            console.log(error)
        }
    }

   
  return (
      <>{
          validUrl ? 
          <>
             {/* <Carousel/> */}
             {
                 post &&
                <div className="row home">
                    <div className="col s12 m10 offset-m1">
                        <div className="col s12 m8 l9">
                            <div className="row">
                                <div className="col s12">
                                    <button className="waves-effect btn-small page_butt">Google</button>
                                </div>
                                <div className="col s12">
                                    <h3 className='single_title'>{post.title}</h3>
                                </div>
                                <div className="col s12" style={{justifyContent:"space-around"}}>
                                    <span className='single_span'><i className="Tiny material-icons" style={{fontSize:"12px", marginRight:"5px"}}>access_time</i>{new Date(post.createdAt).toDateString()}</span>
                                    <span className='single_span'><i className="Tiny  material-icons" style={{fontSize:"12px", marginRight:"5px"}}>favorite_border</i>{post.likes.length} Likes</span>
                                    <span className='single_span'><i className="Tiny  material-icons" style={{fontSize:"12px", marginRight:"5px"}}>chat</i>{post.comments.length} Comments</span>
                                </div>
                                <div className="col s12">
                                    <div className='single_image'>
                                         <img className="single_img materialboxed" onClick={handleOpen} src={post.image}/> 
                                    </div>
                                   
                                </div>
                                <div className="col s12">
                                {
                                    post.likes.includes(state._id) ?
                                    <span><i className="small  material-icons" onClick={()=>{unlike(post._id)}} style={{ marginRight:"5px",cursor:"pointer",color:"red"}}>favorite</i></span>
                                    :
                                    <span><i className="small  material-icons " onClick={()=>{like(post._id)}} style={{ marginRight:"5px",cursor:"pointer"}}>favorite_border</i></span>
                                }
                                 <p style={{marginTop:"3px",textAlign:"justify", fontSize:"14px"}}>{post.desc}</p> 
                                </div>
                                <div className="col s12">
                                    <div className="row single_margin single_row">
                                        <div className="col s12 m6">
                                            <div className="row">
                                                <div className="col s12">
                                                    <h5 className="single_name">{post.user.name}</h5>
                                                </div>
                                                <div className="col s12">
                                                    <p className='single_sapne' style={{color: "#8b8b8b", marginTop:"2px"}}>{post.category.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6 single_flex">
                                            <i className="Tiny  material-icons">favorite_border</i>
                                            <i className="Tiny  material-icons">favorite_border</i>
                                            <i className="Tiny  material-icons">favorite_border</i>
                                            <i className="Tiny  material-icons">favorite_border</i>
                                            <i className="Tiny  material-icons">favorite_border</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12" style={{borderBottom:"1px solid #eeeeee", marginBottom:"7px"}}>
                                    {
                                        post.comments.map((item, index)=>(
                                            <div className="row" key={index}>
                                                <div className="col s3 m2">
                                                    <img style={{width:"70px",height:"70px",objectFit:"cover", borderRadius:"100%"} } src={item.postedBy.pic} alt=""/>
                                                </div>
                                                <div className="col s8 m8 #f5f5f5 grey lighten-4">
                                                    <div className="row single_row">
                                                        <div className="col s12">
                                                            <span style={{fontWeight:"bolder"}}>{item.postedBy.name} </span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col s12">
                                                            <span style={{fontWeight:"200", wordBreak:"break-word"}}>{item.text}</span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col s12"><Link to="/">View More Comments</Link></div>
                                <div className="col s12">
                                    <form onSubmit={(e)=>{e.preventDefault();comment(post._id)}}>
                                        <textarea type="text" value={text} placeholder='Write a public comment' className="materialize-textarea" onChange={(e)=>{setText(e.target.value)}}></textarea>
                                        <button type='submit' className="waves-effect btn-small">Send</button>
                                    </form>
                                </div>
                                <div className="col s12">
                                    <h5 className="search" style={{textAlign:"center"}}>Related Post</h5>
                                </div>
                                <div className="col s12 m4 19">
                                    <div className="card medium">
                                                <div className="card-image">
                                                    <img src="/images/download1.jpg" alt="" className="card-image"/>
                                                    <span  style={{textAlign:"center",fontSize:"15px",fontWeight:"bolder", color:"white"}} className="card-title t-black">Title goes in here</span>
                                                </div>
                                                <div style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>
                                                    
                                                    <span className='card-cat'>Category</span>
                                                    <span className='card-date'>Date</span>
                                                </div>
                                                
                                                <div className="card-content card_cont">
                                                    <p style={{textAlign:"justify", padding:"0 10px !important"}}>I am Link very simple card.little markup to use effectively.
                                                    <Link to="#" className='link'>Read More...</Link>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-action">
                                                    <Link to="/" >Author Name</Link>
                                                </div>
                                            </div>
                                    </div>
                                <div className="col s12 m4 19">
                                    <div className="card medium">
                                                <div className="card-image">
                                                    <img src="/images/download1.jpg" alt="" className="card-image"/>
                                                    <span  style={{textAlign:"center",fontSize:"15px",fontWeight:"bolder", color:"white"}} className="card-title t-black">Title goes in here</span>
                                                </div>
                                                <div style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>
                                                    
                                                    <span className='card-cat'>Category</span>
                                                    <span className='card-date'>Date</span>
                                                </div>
                                                
                                                <div className="card-content card_cont">
                                                    <p style={{textAlign:"justify", padding:"0 10px !important"}}>I am Link very simple card.little markup to use effectively.
                                                    <Link to="#" className='link'>Read More...</Link>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-action">
                                                    <Link to="/" >Author Name</Link>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="col s12 m4 19">
                                    <div className="card medium">
                                                <div className="card-image">
                                                    <img src="/images/download1.jpg" alt="" className="card-image"/>
                                                    <span  style={{textAlign:"center",fontSize:"15px",fontWeight:"bolder", color:"white"}} className="card-title t-black">Title goes in here</span>
                                                </div>
                                                <div style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>
                                                    
                                                    <span className='card-cat'>Category</span>
                                                    <span className='card-date'>Date</span>
                                                </div>
                                                
                                                <div className="card-content card_cont">
                                                    <p style={{textAlign:"justify", padding:"0 10px !important"}}>I am Link very simple card.little markup to use effectively.
                                                    <Link to="#" className='link'>Read More...</Link>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-action">
                                                    <Link to="/" >Author Name</Link>
                                                </div>
                                            </div>
                                    </div>                            
                            </div>
                        </div>
                        <div className="col s12 m4 l3">
                            <HomeSidebar/>
                        </div>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                        style={{cursor:"zoom-out"}}
                    >
                        <Fade in={open}  style={{cursor:"zoom-out"}}>
                            <Box sx={style}>
                                <PictureModal image={post.image} click={handleClose}/>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
                 
            }
          </>:
          <NotPage/>
      }
       
    </>
  )
}

export default SinglePage