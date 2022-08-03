import React, { useSyncExternalStore } from "react";
import HomePosts from "./HomePosts";
import Comments from "./Comments";


function Home ({users}) {
    const myStyle={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1572916118992-5e36d71f7f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29vZGVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
        height:'100%',
        marginTop:'-50px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    
    
    return(
        <div style={myStyle} class="container border col-6">    
            {users.map( user => <HomePosts key={user.id} post={user.post} image={user.image} name={user.name}/> )}
            <Comments />
        </div>

    )
}

export default Home

