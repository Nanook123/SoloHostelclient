import React from 'react'
import {useState} from 'react'

export default function HostelPostForm({makePost, postData, user,username}) {
    const [newPost, setNewPost] = useState({
        "user_id": user,
        "username": username,
        "hostel_name": '',
        'image':'',
        'event_review':'',
        'social_review':'',
        'additional_comment':'',
        'country':'',
        'rating':'',
        'currently_staying':false
        

    })

    

    const [showForm, setShowForm] = useState(false)
   
    function handleChange(e){
        setNewPost({...newPost,
        [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
      e.preventDefault()
      makePost(newPost)
      setNewPost({
        "user_id": user,
        "username": username,
        "hostel_name": '',
        'image':'',
        'event_review':'',
        'social_review':'',
        'additional_comment':'',
        'country':'',
        'rating':'',
        'currently_staying':false
      });
    }



    return (
        <div>
            <button className="form-show-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Hide" : "Hostel Poster"}
            </button>
            {showForm ? (
                
                <div>
                    
                    <form onSubmit={handleSubmit} className="form">
                        <h2 className="form-h2">Hostel poster</h2>
            <input placeholder="Hostel name" type="text" name="hostel_name" value={newPost.hostel_name} onChange={handleChange} />
            <input placeholder="image" type="text" name="image" value={newPost.image} onChange={handleChange} />
            <input placeholder="Event review" type="text" name="event_review" value={newPost.event_review} onChange={handleChange} />
            <input placeholder="Sociability?" type="text" name="social_review" value={newPost.social_review} onChange={handleChange} />
            <input placeholder="Additional Comments" type="text" name="additional_comment" value={newPost.additional_comment} onChange={handleChange} />
            <input placeholder="Country" type="text" name="country" value={newPost.country} onChange={handleChange} />
            <input placeholder="Rating 0/100" type="number" name="rating" value={newPost.rating} onChange={handleChange} />
            <input className="form-submit" type="submit" value="Postel"></input>
            </form>
            </div>) : ""}
            
        </div>
    )
}
