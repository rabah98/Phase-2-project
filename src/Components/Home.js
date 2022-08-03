import React, { useSyncExternalStore } from "react";
import HomePosts from "./HomePosts";


function Home ({users}) {

    
    
    return(
        <div class="container border col-6">    
            {users.map( user => <HomePosts key={user.id} post={user.post} image={user.image} name={user.name}/> )}
        </div>
    )
}

export default Home

