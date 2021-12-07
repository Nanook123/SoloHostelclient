import React from 'react'
import {useState} from 'react'

export default function Users({username, user,usernameid, friend, setPostData, handleDeleteFriend, friendid}) {

    const [friendData, setFriendData] =useState({
        "user_id": user,
        "friend_id": usernameid
    })

    const [follow, setFollow] = useState(true)

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
      setFollow(!true)
      console.log(friend)
      submitFriends(friendData)
     
        fetch(`/hostels`)
        .then(res => res.json())
        .then(data => setPostData(data))
      
      
    }

  




    return (
        <div>{follow ? 
            <button onClick={handleFriends}>Add as a friend :  {username}</button> : <button onClick={()  => handleDeleteFriend(setFollow(!false))}>Remove friend :  {username}</button>}
        </div>
    )
}
