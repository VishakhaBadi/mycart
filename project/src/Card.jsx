import React from 'react'

function Card(props) {
  return (
    <>
    <div style={{border:"solid 1px red",width:"250px", height:'250px'}}>
    <img style={{width:"100px",height:"100px"}}    src={props.image} alt="" />
    <p>Moviename:{props.name}</p>
    <p>Rating:{props.rating}</p>
     </div>
    
    </>
  )
}

export default Card