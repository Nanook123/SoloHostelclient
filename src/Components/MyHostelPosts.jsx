import React from 'react'
import { useState } from 'react'

export default function MyHostelPosts({hostel_name, image, rating, event_review,social_review, additional_comment, currently_staying, country, handleDeletePost,id, postData}) {
 const [show, setShow] =useState(false)
    

const handleShow = () => setShow(!show)

    return (
            <div className="wrappercontainer">
        <div className="wrapper">
            
            <h1>Hostels!</h1>
            <h2>{hostel_name}</h2> 
            <h2>{country}</h2>
            <img className="imagesize" src={image} alt={image} onClick={handleShow} />
           
           {show ? (<div>
            <h2>rating out of 100={rating}</h2>
            <h2>How would you rate the events ? {event_review}</h2>
            <h2>Was it easy to make friends ?{social_review}</h2>
            <h2>Anything you would like to add ?{additional_comment}</h2>
            <h3>Are you currently staying here ?{currently_staying}</h3>
            <button onClick={ () => handleDeletePost(id)}>Delete!</button>
           </div> ) : ""}
        </div>
        </div>
    )
}
