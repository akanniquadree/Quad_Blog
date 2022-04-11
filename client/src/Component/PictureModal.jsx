import React from 'react'

function PictureModal(props) {
  return (
    <div style={{width:"100%", height:"100%"}}>
       <img className="picture_modal" src={props.image} onClick={props.click}/> 
    </div>
  )
}

export default PictureModal