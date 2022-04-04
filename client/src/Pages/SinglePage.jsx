import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../Component/Carousel'
import HomeSidebar from '../Component/HomeSidebar'

function SinglePage() {
  return (
      <>
        <Carousel/>
        <div className="row home">
            <div className="col s12 m10 offset-m1">
                <div className="col s12 m8 l9">
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect btn-small page_butt">Google</button>
                        </div>
                        <div className="col s12">
                            <h3 className='single_title'>Really! The Fascinating Places That Can Be Not Besides You</h3>
                        </div>
                        <div className="col s12" style={{justifyContent:"space-around"}}>
                            <span className='single_span'><i className="Tiny material-icons" style={{fontSize:"12px", marginRight:"5px"}}>access_time</i>23 February 2020</span>
                            <span className='single_span'><i className="Tiny  material-icons" style={{fontSize:"12px", marginRight:"5px"}}>favorite_border</i>Likes</span>
                            <span className='single_span'><i className="Tiny  material-icons" style={{fontSize:"12px", marginRight:"5px"}}>chat</i>Comments</span>
                        </div>
                        <div className="col s12">
                            <div className='single_image'>
                                <img className="materialboxed single_img" src="/images/caro3.jpg"/>
                            </div>
                            <p style={{textAlign:"justify", fontSize:"14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque fuga nobis animi incidunt adipisci magni, inventore est quam soluta eum reiciendis hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque fuga nobis animi incidunt adipisci magni, inventore est quam soluta eum reiciendis hic</p> 
                        </div>
                        <div className="col s12">
                            <div className="row single_margin single_row">
                                <div className="col s12 m6">
                                    <div className="row">
                                        <div className="col s12">
                                            <h5 className="single_name">Author name</h5>
                                        </div>
                                        <div className="col s12">
                                            <p className='single_sapne' style={{color: "#8b8b8b", marginTop:"2px"}}>category Blog</p>
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
                            <div className="row">
                                <div className="col s3 m2">
                                    <img style={{width:"70px",height:"70px",objectFit:"cover", borderRadius:"100%"} } src='/images/download2.jpg' alt=""/>
                                </div>
                                <div className="col s8 m8 #f5f5f5 grey lighten-4">
                                    <div className="row single_row">
                                        <div className="col s12">
                                            <span style={{fontWeight:"bolder"}}>Name </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <span style={{fontWeight:"200", wordBreak:"break-word"}}>d,kjfhkdhfkjkdknhjdfhjdfjdfjkdhkjfdkjfhkjudhjdfhjkfhjkfhjdkfhkjdhjkfdhfdkjhdfjhfjdfhdfhjdfhjdfhjfdnfmdbfndbfjfdhfdjfhjdfhjdmfnfmnfdk</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12" style={{borderBottom:"1px solid #eeeeee",marginBottom:"7px"}}>
                            <div className="row">
                                <div className="col s3 m2">
                                    <img style={{width:"70px",height:"70px",objectFit:"cover", borderRadius:"100%"} } src='/images/download2.jpg' alt=""/>
                                </div>
                                <div className="col s8 m8 #f5f5f5 grey lighten-4">
                                    <div className="row single_row">
                                        <div className="col s12">
                                            <span style={{fontWeight:"bolder"}}>Name </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <span style={{fontWeight:"200", wordBreak:"break-word"}}>d,kjfhkdhfkjkdknhjdfhjdfjdfjkdhkjfdkjfhkjudhjdfhjkfhjkfhjdkfhkjdhjkfdhfdkjhdfjhfjdfhdfhjdfhjdfhjfdnfmdbfndbfjfdhfdjfhjdfhjdmfnfmnfdk</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12" style={{borderBottom:"1px solid #eeeeee",marginBottom:"7px"}}>
                            <div className="row">
                                <div className="col s3 m2">
                                    <img style={{width:"70px",height:"70px",objectFit:"cover", borderRadius:"100%"} } src='/images/download2.jpg' alt=""/>
                                </div>
                                <div className="col s8 m8 #f5f5f5 grey lighten-4">
                                    <div className="row single_row">
                                        <div className="col s12">
                                            <span style={{fontWeight:"bolder"}}>Name </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <span style={{fontWeight:"200", wordBreak:"break-word"}}>d,kjfhkdhfkjkdknhjdfhjdfjdfjkdhkjfdkjfhkjudhjdfhjkfhjkfhjdkfhkjdhjkfdhfdkjhdfjhfjdfhdfhjdfhjdfhjfdnfmdbfndbfjfdhfdjfhjdfhjdmfnfmnfdk</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12"><Link to="/">View More Comments</Link></div>
                        <div className="col s12">
                            <form >
                                <input type="text" placeholder='Write a public comment'/> 
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
        </div>
    </>
  )
}

export default SinglePage