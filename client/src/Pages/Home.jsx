import React, {useEffect, useState, useContext} from 'react'
import HomeSidebar from '../Component/HomeSidebar'
import {Link} from "react-router-dom"
import Carousel from '../Component/Carousel'
import axios from "axios"
import { UserContext } from '../Context/action'
import { UsePagination } from '../Component/UsePagination'
import SinglePage from './SinglePage'
import TrendingPost from '../Component/TrendingPost'
import BestAuthor from '../Component/BestAuthor'

function Home() {
    const {state} = useContext(UserContext)
    const [posts, setPosts] = useState([])
    

    useEffect(()=>{
        const getPosts = async() =>{
            const post = await axios.get("https://quad-blog.onrender.com/api/posts")
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
                            <UsePagination posts={posts}/>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginLeft:"10px"}}>
                <div className="col s12 m6" style={{marginRight:"5%"}}>
                    <h4 className='search'>Trending Post</h4>
                    <TrendingPost/>
                </div>
                <div className="col s12 m5">
                    <h4 className='search'>Best Author of the week</h4>
                    <BestAuthor/>
                </div>
            </div>
        </div>
        
  </>
  )
}

export default Home