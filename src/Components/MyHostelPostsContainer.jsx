import React from 'react'
import MyHostelPosts from './MyHostelPosts'
import HostelPostForm from './HostelPostForm'
import {useState} from 'react'





export default function MyHostelPostsContainer({postData, user, makePost, handleDeletePost, myHostels}) {
  


    const [query, setQuery] = useState("")



 
    


    return (
        <div>
             
            <HostelPostForm makePost={makePost} postData={postData} user={user.id} username={user.username}  /> 
            <input className="searchbar-myhostel" placeholder="Search by country" onChange={e=> setQuery(e.target.value)} />
           
            <div>
            
            {
                myHostels.filter(post => {
                    if (query === '') {
                        return myHostels
                    } else if (post.country.toLowerCase().includes(query.toLowerCase())) {
                        return myHostels
                    }
                }).map(post => <MyHostelPosts user_id={post.user_id} key={post.id} hostel_name={post.hostel_name} image={post.image} rating={post.rating} event_review={post.event_review} social_review={post.social_review} additional_comment={post.additional_comment} currently_staying={post.currently_staying} country={post.country} id={post.id}  postData={postData} handleDeletePost={handleDeletePost}  />
                )
            }
            </div>
        </div>
    )
}




