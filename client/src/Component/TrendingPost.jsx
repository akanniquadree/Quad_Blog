import React, { useEffect, useRef } from 'react'
import M from "materialize-css"

function TrendingPost() {
    const caro = useRef()
    useEffect(()=>{
        M.Carousel.init(caro.current, {fullWidth: false,
            indicators: true})
    },[])
  return (
    <>
    <div className="row">
        <div className="col s12">
            <div className="carousel carousel-slider center" ref={caro}>
                <div className="carousel-fixed-item center">
                    <a className="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div className="carousel-item #e0e0e0 grey lighten-2 white-black" href="#one!">
                    <img src="/images/caro2.jpg" alt='' style={{width:"100%", height:"50%", objectFit:"cover"}}/>
                    <h2 style={{marginTop:"5px", fontSize:"15px", textAlign:"justify", paddingLeft:"10px"}}>First Panel</h2>
                    <p className="white-text truncate"style={{marginTop:"5px", textAlign:"justify", paddingLeft:"10px"}}>This is your first panel</p>
                </div>
                <div className="carousel-item #e0e0e0 grey lighten-2 white-black" href="#one!">
                    <img src="/images/caro2.jpg" alt='' style={{width:"100%", height:"50%", objectFit:"cover"}}/>
                    <h2 style={{marginTop:"5px", fontSize:"15px", textAlign:"justify", paddingLeft:"10px"}}>First Panel</h2>
                    <p className="white-text truncate"style={{marginTop:"5px", textAlign:"justify", paddingLeft:"10px"}}>This is your first panel</p>
                </div>
                <div className="carousel-item #e0e0e0 grey lighten-2 white-black" href="#one!">
                    <img src="/images/caro2.jpg" alt='' style={{width:"100%", height:"50%", objectFit:"cover"}}/>
                    <h2 style={{marginTop:"5px", fontSize:"15px", textAlign:"justify", paddingLeft:"10px"}}>First Panel</h2>
                    <p className="white-text truncate"style={{marginTop:"5px", textAlign:"justify", paddingLeft:"10px"}}>This is your first panel</p>
                </div>
                <div className="carousel-item #e0e0e0 grey lighten-2 white-black" href="#one!">
                    <img src="/images/caro2.jpg" alt='' style={{width:"100%", height:"50%", objectFit:"cover"}}/>
                    <h2 style={{marginTop:"5px", fontSize:"15px", textAlign:"justify", paddingLeft:"10px"}}>First Panel</h2>
                    <p className="white-text truncate"style={{marginTop:"5px", textAlign:"justify", paddingLeft:"10px"}}>This is your first panel</p>
                </div>
            </div>   
        </div>
    </div>
    </>
  )
}

export default TrendingPost