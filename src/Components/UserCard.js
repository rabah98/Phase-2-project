import React from 'react';

const UserCard = ({name, image}) => {
    return (
        <div className="card" >
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default UserCard;