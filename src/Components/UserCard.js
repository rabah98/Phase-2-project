import React from 'react';
import { useState } from 'react';

const UserCard = ({name, image, email, age, location, showFunction}) => {
    const [isMore, setIsMore] = useState(true)
    function handleClick () {
        setIsMore(!isMore)
    }
    return (
        <div className="card" >
            { isMore ?
                <div>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </div> :
                <div>
                    <p>Age: {age}</p>
                    <p>Location: {location}</p>
                    <p>Email: {email}</p>
                </div> 
            }
           
            <button className='submit' onClick={handleClick} >More Info</button>
        </div>
    );
};

export default UserCard;