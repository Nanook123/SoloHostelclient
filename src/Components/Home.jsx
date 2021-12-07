import React from 'react'
import {useState} from 'react'
import Users from './Users'


export default function Home({alluser, user,setPostData, handleDeleteFriend, friendid }) {
const [friendquery, setFriendQuery] = useState('')

    return (
        <div>
            Home
            <div>
            <input placeholder="Search for friends" onChange={e => setFriendQuery(e.target.value)} />
            {
                alluser.filter(postDat => {
                    if (friendquery === '') {
                        return postDat
                    } else if (postDat.username.toLowerCase().includes(friendquery.toLowerCase())) {
                        return postDat
                    }
                }).map(postDat => <Users user={user.id} username={postDat.username}  usernameid={postDat.id} key={postDat.id} setPostData={setPostData} handleDeleteFriend={handleDeleteFriend} friendid={friendid}  />
                    )
                }
                
            </div>
            </div>
        )
    }
    