import React from 'react';
import UserCard from './UserCard';

const ProfileContainer = ({users}) => {
    const allUsers = users.map( user => <UserCard key={user.id}
        image={user.image}
        name={user.name} 
        location={user.location}
        email={user.email}
        age={user.age}
    /> )

    return (
        <div className="cards">
            {allUsers}
        </div>
    );
};

export default ProfileContainer;


// THIS HAS ROUTE (USERS)