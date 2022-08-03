import React from 'react';
import '../App.css';
import UserForm from './UserForm';
import ProfileContainer from './ProfileContainer';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import { Button, Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [users, setUsers] = useState([])
  function updatePosts(newObj) {
    const newPost = [...users, newObj]
    setUsers(newPost)
  }
  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then( res => res.json())
    .then( users => setUsers(users) )
  },[])

  console.log(users)

  function submitFunction(obj) {
    setUsers([...users, obj])
  }

  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/profile">
          <ProfileContainer users={users} />
        </Route>
        <Route exact path="/form">
          <UserForm submitFunction={submitFunction}/>
        </Route>
        <Route exact path="/">
          <Home users={users} updatePosts={updatePosts}/>
        </Route>
      </Switch>
     
      
    </div>
  );
}

export default App;
