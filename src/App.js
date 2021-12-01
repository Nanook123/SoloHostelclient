
import {useState, useEffect} from 'react'
import MyHostelPostsContainer from './MyHostelPostsContainer'
import Home from './Home'
import Login from './Login'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import MyHostelPosts from './MyHostelPosts'

function App() {

const [postData, setPostData] = useState([])
const [user, setUser] = useState(null)

useEffect(() => {
  fetch("/hostel_posts")
  .then(res => res.json())
  .then(data => setPostData(data))
}, [])

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

if(!user) return <Login onLogin={setUser} />

const makePost = post => {
  fetch('/hostel_posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(post => {
    setPostData([
      ...postData, post
    ])
  })
} 


  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
      <Route path="/MyHostelPostsContainer">
      <MyHostelPostsContainer makePost={makePost} postData={postData} user={user} />
      </Route>
      <Route path="/">
      <Home />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
