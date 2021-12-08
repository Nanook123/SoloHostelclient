import React from 'react'
import {useState} from 'react'
import Users from './Users'


export default function Home({alluser, user,setPostData, handleDeleteFriend, friends, handleAddedFriend }) {
const [friendquery, setFriendQuery] = useState('')

    return (
        <div>
            Home
            <div>
            <input placeholder="Search for friends" onChange={e => setFriendQuery(e.target.value)} />
            { !friends ? <p>...loading friends...</p> : 
                alluser.filter(postDat => {
                    if (friendquery === '') {
                        return postDat
                    } else if (postDat.username.toLowerCase().includes(friendquery.toLowerCase())) {
                        return postDat
                    }
                }).map(postDat => <Users user={user.id} username={postDat.username}  usernameid={postDat.id} key={postDat.id} setPostData={setPostData} handleDeleteFriend={handleDeleteFriend} handleAddedFriend={handleAddedFriend}
                    friend={friends.filter(friend => friend.id == user.id)[0]}/>
                    )
                }
                
            </div>
            </div>
        )
    }
    