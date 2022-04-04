import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function HomeSidebar() {
    const [posts, setPosts] = useState([])
    const [cats, setCats] = useState([])
    useEffect(()=>{
        const getPosts = async() =>{
            const post = await axios.get("http://localhost:5000/api/posts")
            setPosts(post.data)
        }
        const getCat = async() =>{
            const cat = await axios.get("http://localhost:5000/api/category")
            setCats(cat.data)
            console.log(cats)
        }
        getPosts()
        getCat()
    },[])
  return (
    <div className='col s12'>
        <h4 className='search'>Search</h4>
        <hr/>
        <div className="card">
          <div className="input-field">
          <input id="search" type="search" required/>
          <label className="label-icon " htmlFor="search"><i className="material-icons label-icn"style={{color:"black"}}>search</i></label>
          <i className="material-icons" style={{fontSize:"15px",marginTop:"5px"}}>close</i>
        </div> 
        </div>


        {/* Recent Post  */}
        <h4 className='search'>Recent Posts</h4>
        <hr/>
        <ul className='sidecontent' >
            {
               posts?.slice(0,3).map((item, index)=>(
                    <li className='sidecontent_wrapper' key={index}>
                    <Link to="blog-details.html" className='link' style={{display:"flex",  marginBottom:"5px"}} >
                        <div className='recentImg'> <img className='sideimage' src={item.image} alt="Image"/></div>
                       
                        <div style={{marginLeft:"10px"}}>
                            <span className='spane'>{new Date(item.createdAt).toDateString()}</span>
                            <h3 style={{fontSize:"13px"}} className="spann">{item.title}</h3>
                        </div> 
                    </Link>
                </li>  
                ))
            }
    
        </ul>


        {/* Archive */}
        <h4 className='search'>Archive</h4>
        <hr/>
        <ul className='sidecontent' >
            <li className='sidecontent_wrapper'>
                <Link to="blog-details.html" className='link' style={{display:"flex"}} >
                    <span className='spane'>13 January 2020</span>
                </Link>
            </li>    
            <li className='sidecontent_wrapper'>
                <Link to="blog-details.html" className='link' style={{display:"flex"}} >
                    <span className='spane'>13 January 2020</span>
                </Link>
            </li>    
            <li className='sidecontent_wrapper'>
                <Link to="blog-details.html" className='link' style={{display:"flex"}} >
                    <span className='spane'>13 January 2020</span>
                </Link>
            </li>    
        </ul>


        <h4 className='search'>Category</h4>
        <hr/>
        
        <ul className='sidecontent' >   
        {
            cats?.map((item, index)=>(
                <li className='sidecontent_wrapper' key={index}>
                    <Link to={`/category/${item.name}`} className='link' style={{display:"flex"}} >
                        <span className='spane'>{item.name}</span>
                    </Link>
                </li>  
            ))
            
         
        }

        </ul>
    </div>
  )
}

export default HomeSidebar