import './index.css';
import UserForm from './UserForm';
import ProfileContainer from './ProfileContainer';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then( res => res.json())
    .then( users => setUsers(users) )
  },[])

  function submitFunction(obj) {
    setUsers([...users, obj])
  }

  
  return (
    <div className="App">
      <>Hello</>
      <UserForm submitFunction={submitFunction} />
      <ProfileContainer users={users} />
    </div>
  );
}

export default App;
