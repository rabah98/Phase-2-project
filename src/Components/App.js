import '../App.css';
import UserForm from './UserForm';
import ProfileContainer from './ProfileContainer';
import { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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


    </div>
  );
}

export default App;
