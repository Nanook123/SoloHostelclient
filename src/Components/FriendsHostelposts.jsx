import React from 'react'
import { useState } from 'react'
import { ProgressCircle } from 'react-simple-circle-rating';

export default function FriendsHostelposts({hostel_name, image, rating, event_review,social_review, additional_comment, currently_staying, country, username}) {
    const [show, setShow] =useState(false)
    

    const handleShow = () => setShow(!show)
    
        return (
                <div className="wrappercontainer">
            <div className="wrapper">
                <h2>{username}</h2>
                <h2>{hostel_name}</h2> 
                <h2>{country}</h2>
                <img className="imagesize" src={image} alt={image} onClick={handleShow} />
               
               {show ? (<div className="contentwrapper">
                <h1 className="rating">rating<ProgressCircle percentage={rating}
            colorBackground="#2432f052"
            transparency="true"
            size={20}
                />
                </h1>
                <h2>Events - {event_review}</h2>
                <h2>Sociability -  {social_review}</h2>
                <h2>Additional comments - {additional_comment}</h2>
                
               
               </div> ) : ""}
            </div>
            </div>
        )
    }
 