import React, {useEffect, useState} from 'react'
import HomeSidebar from '../Component/HomeSidebar'
import {Link} from "react-router-dom"
import Carousel from '../Component/Carousel'
import axios from "axios"

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const getPosts = async() =>{
            const post = await axios.get("http://localhost:5000/api/posts")
            setPosts(post.data)
        }
        getPosts()
    },[])
  return (
    <>
        <div>
            {/* <Carousel/> */}
        </div>  
        <div className="row home">
            <div className="col s12 m10 offset-m1">
                <div className="row">
                    <div className="col s12 m2 l3">
                        <HomeSidebar/>
                    </div>
                    <div className="col s12 m8 l9">
                        <div className="row">
                            {
                                posts.map((item, index)=>(
                                <div className="col s12 m4 19" key={index}>
                                    <div className="card medium">
                                        <div className="card-image">
                                            <img src={item.image} alt="" className="card-image"/>
                                            <span  style={{textAlign:"center",fontSize:"15px",fontWeight:"bolder", color:"white"}} className="card-title t-black">Title goes in here</span>
                                        </div>
                                        <div style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>
                                            
                                            <span className='card-cat'>{item.category.name}</span>
                                            <span className='card-date'>{new Date(item.createdAt).toDateString()}</span>
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
                                ))
                                
                                
                            }
                        </div>
                        <div className="col s6 offset-s3">
                            <ul className="pagination">
                                <li className="disabled"><Link to="#!"><i className="material-icons">chevron_left</i></Link></li>
                                <li className="active"><Link to="#!">1</Link></li>
                                <li className="waves-effect"><Link to="#!">2</Link></li>
                                <li className="waves-effect"><Link to="#!">3</Link></li>
                                <li className="waves-effect"><Link to="#!">4</Link></li>
                                <li className="waves-effect"><Link to="#!">5</Link></li>
                                <li className="waves-effect"><Link to="#!"><i className="material-icons">chevron_right</i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  </>
  )
}

export default Home