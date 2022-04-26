import React, {useState, useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/action'
import PadNumber from './PadNumber'


export const UsePagination = ({posts, cat}) => {
    const {state} = useContext(UserContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12) 

    //To get current posts
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage)

    //Paginate
    const paginate = (pageNumber) =>{setCurrentPage(pageNumber)}
    //go back 
    function goToPrev(page){
        setCurrentPage((page) => page - 1)
    }
    //go to next page
    function goToNext (page){
        setCurrentPage((page) => page + 1) 
    }
    useEffect(()=>{
        window.scrollTo({ behavior: 'smooth', top: '0px' });
       
    },[currentPage])

    return(
        <>
            <div className='row'>
                {
                    currentPosts.map((item, index)=>(
                        <div className="col s12 m4 19" key={index}>
                            <div className="card small cardHover">
                                <div className="card-image">
                                    <Link to={`/blog/${item._id}`}><img src={item.image} alt="" className="card-image"/></Link>
                                    <span  style={{textAlign:"center",fontSize:"15px",fontWeight:"bolder", color:"white"}} className="card-title t-black">Title goes in here</span>
                                </div>
                                <div style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>
                                    
                                    <span className='card-cat'>{cat ? cat :item.category.name }</span>
                                    <span className='card-date'>{new Date(item.createdAt).toDateString()}</span>
                                </div>
                                
                                <div className="card-content card_cont">
                                    <Link to={`/blog/${item._id}`} className='link'><p style={{textAlign:"center", padding:"0 10px !important", fontWeight:"bold"}}>{item.title}</p>
                                    </Link>
                                </div>
                                <div className="card-action card-action2">
                                    <Link to={state._id !== item.user._id ? `profile/${item.user._id}`:`/profile`} >{item.user.name}</Link>
                            
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="col s6 offset-s3">
                <PadNumber postPerPage={postPerPage} currentPage={currentPage} totalPosts={posts.length} paginate={paginate} goToNext={goToNext} goToPrev={goToPrev} />
            </div>
        </>
   )
}
