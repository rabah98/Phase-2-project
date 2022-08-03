import React from "react";


function HomePosts({post, image, name}) {
    
    return (
        <div class="row" style={{ margin: "50px", backgroundColor: "#ADD8E6"}}>
            <img src={image} alt={name} class="col-xl-2" style={{ width: "15%", height: "15%", borderRadius: "50%"}}/>
            <p class="col md-8">{post}</p>
        </div>
    )
}

export default HomePosts