import React from "react";


function HomePosts({post, image, name}) {
    
    return (
        <div className="card">
            <p>{post}</p>
            <img src={image} alt={name}/>
        </div>
    )
}

export default HomePosts