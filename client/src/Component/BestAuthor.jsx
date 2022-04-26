import React, {useEffect, useRef} from 'react'
import M from "materialize-css"

export default function BestAuthor() {
    const slider = useRef()
    useEffect(()=>{
        M.Slider.init(slider.current, {indicators:true})
    },[])
  return (
    <div>
        <div className="slider" ref={slider}>
            <ul className="slides">
                <li>
                    <img src="/images/caro3.jpg" alt=""/> 
                    <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="/images/caro3.jpg" alt=""/> 
                    <div className="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="/images/caro3.jpg" alt=""/> 
                    <div className="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="/images/caro3.jpg" alt=""/> 
                    <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
            </ul>
  </div>
    </div>
  )
}
