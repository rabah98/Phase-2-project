import React from 'react';

const UserCard = ({name, image, email, age, location, showFunction}) => {
    function handleClick () {
        showFunction(email, age, location)
    }
    return (
        <div className="card" >
            <img src={image} alt={name} onClick={handleClick} />
            <p>{name}</p>
        </div>
    );
};

export default UserCard;