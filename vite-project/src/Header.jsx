import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    < >
    <div >

    <header style={{display:'flex', justifyContent:'space-evenly', border:'solid 1px black'}}>
      <div>
  <img  height={50} width={50} style={{borderRadius:"50%", display:'flex',alignItems:'center'}} src="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696459/samples/ecommerce/analog-classic.jpg" alt="" />
        <b >MY MART</b>
      </div>

   <nav style={{display:'flex', gap:'20px',alignItems:'center'}}>
  <Link  to={'/'} ><a href="">Home</a></Link> 
  <Link to={'/about'} ><a href="">About</a></Link> 
   <Link to={'/register'} ><a href="">Register</a></Link>
  <Link to={'/login'} ><a href="">login</a></Link> 
  <Link to={'/products'}> <a href="">products</a></Link> 

   </nav>


    </header>
    </div>
    </>
  )
}

export default Header