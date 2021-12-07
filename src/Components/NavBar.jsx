import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import { SidebarData } from './SidebarData'
import './NavBar.css';
import { IconContext } from "react-icons";

export default function NavBar() {
    const [sidebar, setSidebar] =useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
        <div className='navbar'>
        <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}  />
        </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>

            </li>
            {SidebarData.map((item, index ) => {
                return (
                    <li key={index} className={item.cName}>
                     <Link to={item.path}>
                        {item.icon} 
                        <span>{item.title}</span>
                    </Link>   
                    </li>
                )
            })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>

    )
}



{/* <NavLink classname='menu-bars' to="/">Home</NavLink>
<NavLink classname='menu-bars' to="/MyHostelPostsContainer">MyHostelPosts</NavLink>
<NavLink classname='menu-bars' to="/FriendsHostelPostsContainer">Friends Posts</NavLink> */}