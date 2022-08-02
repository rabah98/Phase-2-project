import '../App.css';
import UserForm from './UserForm';
import ProfileContainer from './ProfileContainer';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";
import Home from './Home';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then( res => res.json())
    .then( users => setUsers(users) )
  },[])

  
  return (
    <div className="App">
      <NavBar />
      <Switch>
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
     
      
    </div>
  );
}

export default App;
