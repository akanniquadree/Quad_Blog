import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"

function Carousel({slides}) {
  const carousel = useRef(null)
  useEffect(()=>{
  const move = M.Carousel.init(carousel.current,{indicators:true})
   setInterval(() => {
    move.next()
   }, 10000);
  },[])
  return (
    <div>
      <div className="carousel carousel-slider caro" ref={carousel}>
        <div className="carousel-item "><img src="/images/caro.jpg" className='caro-img'/></div>
        <div className="carousel-item "><img src="/images/caro1.jpg" className='caro-img'/></div>
        <div className="carousel-item "><img src="/images/caro2.jpg"  className='caro-img'/></div>
        <div className="carousel-item "><img src="/images/caro3.jpg" className='caro-img'/></div>
        <div className="carousel-item "><img src="/images/caro1.jpg" className='caro-img'/></div>
      </div>     
    </div>
  )
}

export default Carousel