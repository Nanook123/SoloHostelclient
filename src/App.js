
import {useState, useEffect} from 'react'
import MyHostelPostsContainer from './Components/MyHostelPostsContainer'
import Home from './Components/Home'
import Login from './Components/Login'
import Header from './Components/Header'
import {Switch, Route} from 'react-router-dom'
import FriendsHostelPostsContainer from './Components/FriendsHostelPostsContainer'


function App() {

const [postData, setPostData] = useState([])
const [user, setUser] = useState(null)
const [alluser, setAllUser] =useState([])
const [friend, setFriendDat] = useState([])
const [myHostels, setMyHostels] = useState([])



useEffect((id) => {
  fetch('/hostels/mine')
  .then(res => res.json())
  .then(data => setMyHostels(data))
}, [])



useEffect(() => {
    fetch("/friend")
    .then(res => res.json())  
    .then(data => setFriendDat(data))

  }, [])

useEffect((id) => {
  fetch(`/hostels`)
  .then(res => res.json())
  .then(data => setPostData(data))
}, [])



useEffect(() => {
  fetch('/users', {
    credentials: 'include'
  })
  .then(res => {

    if (res.ok) {
      res.json().then(allUser => setAllUser(allUser))
    }
  })
},[])



useEffect(() => {
  fetch('/me', {
    credentials: 'include'
  })
  .then(res => {

    if (res.ok) {
      res.json().then(user => setUser(user))
    }
  })
},[])

if(!user) return <Login user={user} onLogin={setUser} />

const makePost = post => {
  fetch('/hostels', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(post => {
    setMyHostels([
      ...myHostels, post
    ])
  })
} 
const handleDeletePost = id => {
  fetch(`/hostels/${id}`,{
    method: 'DELETE'
  }).then(() => {
    const deletePost = myHostels.filter(post => post.id !== id)
    setMyHostels(deletePost)
  })
}

const handleDeleteFriend = id => {
  fetch(`/removefriend/${id}`,{
    method: 'DELETE'
  }).then(() => {
    const deleteFriend = friend.filter(post => post.id !== id)
    setFriendDat(deleteFriend)
  })
}







  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
      <Route path="/MyHostelPostsContainer">
      <MyHostelPostsContainer myHostels={myHostels} makePost={makePost} postData={postData} user={user} setPostData={setPostData} handleDeletePost={handleDeletePost} />
      </Route>
      <Route path="/FriendsHostelPostsContainer">
      <FriendsHostelPostsContainer friend={friend} postData={postData} user={user} alluser={alluser} />
      </Route>
      <Route path="/">
      <Home user={user} alluser={alluser} setPostData={setPostData} handleDeleteFriend={handleDeleteFriend}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
