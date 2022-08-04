import React from 'react';
import { useState } from 'react';

const UserCard = ({name, image, email, age, location, showFunction}) => {
    const [isMore, setIsMore] = useState(true)
    function handleClick () {
        setIsMore(!isMore)
    }

    const flipCard = {
        marginLeft: "0px",
        fontWeight: "bold",
        fontSize: "20px",
    }

    return (
        <div className="card" >
            { isMore ?
                <div>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </div> :
                <div className='more-info'>
                    <p style={flipCard}>Age: {age}</p>
                    <p style={flipCard}>Location: {location}</p>
                    <p style={flipCard}>Email: {email}</p>
                </div> 
            }
           
            <button className='submit' onClick={handleClick} >More Info</button>
        </div>
    );
};

export default UserCard;