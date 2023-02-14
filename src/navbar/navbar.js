import React, { useState } from 'react'
import './navbar.scss'

function Navbar() {
const [active,setActive]=useState(false);
  const menuOnClick=()=> {
    setActive(!active)
    // console.log(document.getElementById("menu-bg").classList);
    // document.getElementById("menu-bar").classList.toggle('change');
    // document.getElementById("nav").classList.toggle('change');
    // document.getElementById("menu-bg").classList.toggle('change-bg');
    // console.log("click");
    // console.log(document.getElementById("menu-bar").classList);
  }

  return (
    <div className='navbar'>
    <div className='nav-title'>
       <p>shaunak</p>
    </div>
    {/* <div className='nav-menu'>
     <div className='nav-item'><a href="">home</a></div>
     <div className='nav-item'><a href="">skills</a></div>
     <div className='nav-item'><a href="">qualifications</a></div>
    </div> */}
    <div className="nav-menu">
    <div id="menu-bar" className={active?'change bars':"bars"} onClick={()=>{menuOnClick()}}>
    <div  className="bar bar1"></div>
    <div  className="bar bar2"></div>
    <div  className="bar bar3"></div>
    </div>
  <div className={active?'change1 nav':"nav"} id="nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Qualifications</a></li>
      <li><a href="#">Contact Me</a></li>
    </ul>
  </div> 
  <div className={active?'change-bg menu-bg':"menu-bg"} id="menu-bg"></div>
  <div className={active?'change-bg menu-bg1':"menu-bg"} id="menu-bg"></div>
</div>



    </div>
  )
}

export default Navbar