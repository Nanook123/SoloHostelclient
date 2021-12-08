import React from 'react'
import { useState } from 'react'
import { ProgressCircle } from 'react-simple-circle-rating';

export default function MyHostelPosts({hostel_name, image, rating, event_review,social_review, additional_comment, currently_staying, country, handleDeletePost,id, postData}) {
 const [show, setShow] =useState(false)
    

const handleShow = () => setShow(!show)

    return (
            <div className="wrappercontainer">
        <div className="wrapper">
            
            <h2>{hostel_name}</h2> 
            <h2>{country}</h2>
            <img className="imagesize" src={image} alt={image} onClick={handleShow} />
           
           {show ? (<div classname="contentwrapper">
            <h1 className="rating">rating<ProgressCircle percentage={rating}
            colorBackground="#f0f0f0"
            transparency="true"
            size={15}
            />
			</h1>
            <h2 >Events - {event_review}</h2>
            <h2>Sociability -  {social_review}</h2>
            <h2>Additional comments - {additional_comment}</h2>
            <h3>Are you currently staying here ?{currently_staying}</h3>
            <button onClick={ () => handleDeletePost(id)}>Delete!</button>
           </div> ) : ""}
        </div>
        </div>
    )
}
