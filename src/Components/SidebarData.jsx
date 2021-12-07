import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'





export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'My hostels',
        path: '/MyHostelPostsContainer',
        icon: <FaIcons.FaHotel />,
        cName: 'nav-text'
    },
    {
        title: 'Friends Hostels',
        path: '/FriendsHostelPostsContainer',
        icon: <FaIcons.FaHotel />,
        cName: 'nav-text'
    },
]
