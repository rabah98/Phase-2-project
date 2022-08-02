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
<<<<<<< HEAD
          <Route exact path="/profile">
            <ProfileContainer users={users} />
          </Route>
          <Route exact path="/form">
            <UserForm submitFunction={submitFunction}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
     
      
=======
        <Route exact path="/profile">
          <ProfileContainer users={users} />
        </Route>
        <Route exact path="/form">
          <UserForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
>>>>>>> a49c689baf2f088467423e503c6c692a8011419d
    </div>
  );
}

export default App;
