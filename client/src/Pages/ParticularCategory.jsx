import React, { useEffect, useState, useContext } from 'react'
import HomeSidebar from '../Component/HomeSidebar'
import {Link, useParams} from "react-router-dom"
import Carousel from '../Component/Carousel'
import axios from "axios"
import NotPage from '../Component/404Page'
import { UserContext } from '../Context/action'
import { UsePagination } from '../Component/UsePagination'


function ParticularCategory() {
    const {state} = useContext(UserContext)
    const [cats, setCats] = useState({})
    const [validUrl, setValidUrl] = useState(false)
    const {name} = useParams()
    
    useEffect(()=>{
        const getPosts = async() =>{
            const post = await axios.get(`http://localhost:5000/api/category/${name}`)
            setCats(post.data)
            setValidUrl(true)
            
        }
        getPosts()
    },[])
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
                        <UsePagination posts={cats.posts} cat={cats.name}/>
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

export default ParticularCategory