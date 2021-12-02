import React from 'react'
import MyHostelPosts from './MyHostelPosts'

export default function SearchBar({ query, setQuery, postData }) {
    return (
        <div>
            <input placeholder="Search by country" />
            {
                postData.filter(post => {
                    if (query === '') {
                        return post
                    } else if (postData.title.toLowerCase().includes(query.toLowerCase())) {
                        return postData;
                    }
                }).map(post => <MyHostelPosts userId={post.user_id} key={post.id} hostel_name={post.hostel_name} image={post.image} rating={post.rating} event_review={post.event_review} social_review={post.social_review} additional_comment={post.additional_comment} currently_staying={post.currently_staying} country={post.country} id={post.id}  postData={postData} />
                )
            }
        </div>
    )
}
