import React, { useEffect, useState, useContext } from 'react'
import HomeSidebar from '../Component/HomeSidebar'
import {Link, useParams} from "react-router-dom"
import Carousel from '../Component/Carousel'
import axios from "axios"
import NotPage from '../Component/404Page'
import { UserContext } from '../Context/action'
import { UsePagination } from '../Component/UsePagination'


function ParticularPost() {
    const {state} = useContext(UserContext)
    const [cats, setCats] = useState([])
    const [validUrl, setValidUrl] = useState(false)
    const {id} = useParams()
    
    useEffect(()=>{
        const getPosts = async() =>{
            const post = await axios.get(`https://quad-blog.onrender.com/api/use/${id}`)
            setCats(post.data)
            setValidUrl(true)
            console.log(cats)
            
        }
        getPosts()
    },[])
    console.log(cats)
  return (
    <>
    {
        validUrl ? 
        <>
        <div>
        <Carousel/>
        </div>  
        <div className="row home">
            <div className="col s12 m10 offset-m1">
                <div className="row">
                    <div className="col s12 m2 l3">
                        <HomeSidebar/>
                    </div>
                    <div className="col s12 m8 l9">
                        
                            <UsePagination posts={cats}/>
                    </div>
                </div>
            </div>
        </div>  
        </>:
        <NotPage/> 
    }
   
</>
  )
}

export default ParticularPost