import React, { useSyncExternalStore } from "react";
import HomePosts from "./HomePosts";
import { Card } from "react-bootstrap";
import Comments from "./Comments";
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home ({users, updatePosts}) {
    const myStyle={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1572916118992-5e36d71f7f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29vZGVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
        height:'100%',
        marginTop:'-50px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const [commentContainer, setContainer] = useState([])
    function addNewComment(str) {
        const newPost = {
            post: str,
            image: "https://i.pinimg.com/736x/8f/1b/09/8f1b09269d8df868039a5f9db169a772.jpg"
        }
        updatePosts(newPost)
    }
    console.log(commentContainer)
    // <img src='' />
    // setContainer(comment)
    
    
    return(
    <div>
        {/* <div style={myStyle} class="container border col-6">    
            {users.map( user => <HomePosts key={user.id} post={user.post} image={user.image} name={user.name}/> )}

            <Comments />
        </div> */}
        <Container >
        <Row>
          <Col md="auto">
          <Comments addNewComment={addNewComment} />
          Varible width content
          </Col>
          <Col style={myStyle}>  
            {users.map( user => <HomePosts key={user.id} post={user.post} image={user.image} name={user.name}/> )}
           </Col>
        </Row>
      </Container>
    </div>
        

    )
}

export default Home

