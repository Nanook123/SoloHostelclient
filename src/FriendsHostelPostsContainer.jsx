import React from 'react'
import {useState} from 'react'
import FriendsHostelposts from './FriendsHostelposts'

export default function FriendsHostelPostsContainer({postData, user, friend}) {

    return (
        <div>
            {
            // postData.filter(data => friend.user_id === data.user_id )
            postData.map(data => <FriendsHostelposts user_id={data.user_id} key={data.id} hostel_name={data.hostel_name} image={data.image} rating={data.rating} event_review={data.event_review} social_review={data.social_review} additional_comment={data.additional_comment} currently_staying={data.currently_staying} country={data.country} id={data.id}   />)}
        </div>
    )
}
