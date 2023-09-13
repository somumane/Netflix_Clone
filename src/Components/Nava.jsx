import React, { useContext } from 'react'
import '../Style/Nava.css'
import { useState,useEffect } from 'react'

const Nava = () => {
  const[show,setshow]=useState(false);
  const transitionNavbar=()=>{
    if(window.scrollY>100){
        setshow(true);
    }else{
        setshow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavbar);
    return()=> window.removeEventListener('scroll',transitionNavbar); 
  },[])


  return (
    <div className={`nav ${show &&'nav_black'}`}>
 <div className='nav_contains'>
 
 <img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
   <img className='nav_avatar' src='https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0' alt=''/>
 </div>
    </div>
  )
}

export default Nava
