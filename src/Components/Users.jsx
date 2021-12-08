import React from 'react'
import {useState, useEffect} from 'react'

export default function Users({username, user,usernameid, friend, setPostData, handleDeleteFriend, friendid, handleAddedFriend}) {
    // const [friends, setFriends] = useState([])
    const [myFriend, setFriend] = useState(null)
    const [friendData, setFriendData] = useState({
        "user_id": user,
        "friend_id": usernameid
    })

    // const [friend, setFriend] = useState(null)

    useEffect(() => {
      fetch("/friend")
      .then(res => res.json())  
      .then(data => setFriend(data.filter(friend => friend.friend_id == usernameid)[0] || null))
    }, [])

    const submitFriend = data => {
      fetch('/friendlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => {
        setFriend(res)
        setFriendData([
           res
        ])
      })
    } 
    function addFriend(e) {
      e.preventDefault()
      console.log(friendData)

      submitFriend(friendData)
     
      fetch(`/hostels`)
        .then(res => res.json())
        .then(data => setPostData(data))

    }

    function removeFriend(id) {
      fetch(`/removefriend/${id}`,{
        method: 'DELETE'
      }).then(res => {
        setFriend(null)
        // setFriends(friends.filter(friend => friend.friend_id !== id))
      })
      fetch(`/hostels`)
        .then(res => res.json())
        .then(data => setPostData(data))

    }

    return (
      
        <div>
          {
          // (friends && friends.filter(friend => friend.friend_id == usernameid)[0] !== undefined) ?
          myFriend ?
          // <button onClick={()  => removeFriend(friends.filter(friend => friend.friend_id == usernameid)[0].id)}>Remove friend :  {username} ({usernameid}) </button>
          <button className="Friendbtn" onClick={()  => removeFriend(myFriend.id)}>Remove friend :  {username} </button>
          :
          <button className="Friendbtnadd" onClick={addFriend}>Add as a friend : {username} </button> 
          }
        </div>
    )
}
