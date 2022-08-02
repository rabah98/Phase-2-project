import '../App.css';
import UserForm from './UserForm';
import ProfileContainer from './ProfileContainer';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then( res => res.json())
    .then( users => setUsers(users) )
  },[])

  
  return (
    <div className="App">
      <>Hello</>
      <Button> this is Button</Button>
     
      <ProfileContainer users={users} />
    </div>
  );
}

export default App;
