import React from "react";


function HomePosts({post, image, name}) {
    
    return (
        <div class="row" style={{ margin: "50px"}}>
            <img src={image} alt={name} class="col-xl-2" style={{ transform: "50%", borderRadius: "50%"}}/>
            <p class="col md-8">{post}</p>
        </div>
    )
}

export default HomePosts