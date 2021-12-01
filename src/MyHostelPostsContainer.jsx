import React from 'react'
import MyHostelPosts from './MyHostelPosts'
import HostelPostForm from './HostelPostForm'

export default function MyHostelPostsContainer({postData, user, makePost}) {
    return (
        <div>
            <HostelPostForm makePost={makePost}  /> 
            {postData.filter(post => post.user_id === user.id).map(post => <MyHostelPosts userId={post.user_id} key={post.id} hostel_name={post.hostel_name} image={post.image} rating={post.rating} event_review={post.event_review} social_review={post.social_review} additional_comment={post.additional_comment} currently_staying={post.currently_staying} country={post.country}  />
                )} 
                
        </div>
    )
}
// // {postData.map(post => 
//                 <MyHostelPosts key={post.id} hostel_name={post.hostel_name} image={post.image} rating={post.rating} event_review={post.event_review} social_review={post.social_review} additional_comment={post.additional_comment} currently_staying={post.currently_staying} country={post.country}  />
//                 )}