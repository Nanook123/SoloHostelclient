import React from 'react'
import {useState} from 'react'
import FriendsHostelposts from './FriendsHostelposts'

export default function FriendsHostelPostsContainer({postData, alluser}) {
    const [query, setQuery] = useState("")
    return (
        <div>
             
            
            <input className="searchbar" placeholder="Search by country" onChange={e=> setQuery(e.target.value)} />
            <div>
            
            {
                postData.filter(post => {
                    if (query === '') {
                        return postData
                    } else if (post.country.toLowerCase().includes(query.toLowerCase())) {
                        return postData
                    }
                }).map(data => <FriendsHostelposts user_id={data.user_id} key={data.id} hostel_name={data.hostel_name} image={data.image} rating={data.rating} event_review={data.event_review} social_review={data.social_review} additional_comment={data.additional_comment} currently_staying={data.currently_staying} country={data.country} id={data.id} username={data.username} alluser={alluser}  />
                )
            }
            </div>
        </div>
    )
}

// postData.map(data => <FriendsHostelposts user_id={data.user_id} key={data.id} hostel_name={data.hostel_name} image={data.image} rating={data.rating} event_review={data.event_review} social_review={data.social_review} additional_comment={data.additional_comment} currently_staying={data.currently_staying} country={data.country} id={data.id} username={data.username} alluser={alluser}  />)}