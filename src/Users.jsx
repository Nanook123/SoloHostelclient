import React from 'react'
import {useState} from 'react'

export default function Users({username, user,usernameid, friend}) {

    const [friendData, setFriendData] =useState({
        "user_id": user,
        "friend_id": usernameid
    })

    const submitFriends = friendDat => {
      fetch('/friendlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(friendDat)
      })
      .then(res => res.json())
      .then(friendDat => {
        setFriendData([
           friendDat
        ])
      })
    } 
    function handleFriends(e){
      e.preventDefault()
      console.log(friendData)
      submitFriends(friendData)
      
    }

    return (
        <div>
            <button onClick={handleFriends}>Add as a friend :  {username}</button>
        </div>
    )
}
