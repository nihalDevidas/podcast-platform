import React from 'react'
import { NavLink } from 'react-router-dom';
import "./styles.css";

const Header = () => {
  return (
    <div className='navBar'>
        
        <div className='gradient'></div>
        <div className='links'>
            <NavLink to = "/" >SignUp</NavLink>
            <NavLink to = "/podcasts" >Podcasts</NavLink>
            <NavLink to = "/start-a-podcast" >Start A Podcast</NavLink>
            <NavLink to = "/profile" >Profile</NavLink>
        </div>
    </div>
  )
}

export default Header;