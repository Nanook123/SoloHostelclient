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
        <div>
            <h1>SoloHostel!</h1>
            <NavBar />
            <button onClick={handleLogout}>Logout</button>


        </div>
    )
}
