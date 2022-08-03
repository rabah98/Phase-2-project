import React from 'react';
import UserCard from './UserCard';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProfileContainer = ({users}) => {
    const allUsers = users.map( user => <UserCard key={user.id}
        image={user.image}
        name={user.name} 
        location={user.location}
        email={user.email}
        age={user.age} 
        showFunction={showFunction} 
    /> )

    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    
    function showFunction(str1, str2, str3) {
        setEmail(str1)
        setAge(str2)
        setLocation(str3)
    }
    return (
        <div className="cards">
            {allUsers}
            <div>
                <p>{age}</p>
                <p>{location}</p>
                <p>{email}</p> 
            </div>
           
        </div>
    );
};

export default ProfileContainer;


// THIS HAS ROUTE (USERS)