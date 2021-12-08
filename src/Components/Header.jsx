import React from 'react'
import NavBar from './NavBar'

export default function Header({user, setUser}) {

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(res => {
            if(res.ok){
                setUser(null);
            }
        })
    }




    return (
        <div className='header'>
            <NavBar /> 
            <button className='logoutbtn' onClick={handleLogout}>Logout</button>
            <h1 className="Title">Hostolo</h1>
           


        </div>
    )
}
