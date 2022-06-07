import React from 'react'
 import {useNavigate} from 'react-router-dom'
import './SideNav.css'

function SideNav() {
    const navigate = useNavigate()
    const navigate_page = (path)=>{
        navigate(path)
    }
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav(){
      document.getElementById("mySidenav").style.width = "0";
    }
  return (
    <>
 <div id="mySidenav" className="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav()}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>


<span className='span' onClick={openNav()}>&#9776; open</span>
    </>
  )
}

export default SideNav