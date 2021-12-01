import { NavLink } from "react-router-dom";

import React from 'react'

export default function NavBar() {
    return (
        <nav>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/MyHostelPostsContainer">MyHostelPosts</NavLink>

        </nav>
    )
}
