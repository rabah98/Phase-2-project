import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Comments = ({addNewComment}) => {
    const [comment, setComment] = useState("")
    function handleSubmit (e) {
        e.preventDefault()
        addNewComment(comment)
    }
    return (
       <div >
        <Form onSubmit={handleSubmit}>

         {/* <input
           type="text"
           name="name"
           placeholder="Enter your comment here..."
           className="input-text"
           onChange={(e) => setComment(e.target.value)}
         /> */}
          <Form.Group className="input-text" controlId="newPost" >
          <Form.Label>New Comment</Form.Label>
          <Form.Control type="text" placeholder="Enter your comment here..." onChange={(e) => setComment(e.target.value)}/>
        </Form.Group>
         <br />
        
             <button className="submit" type='submit' >Post a comment</button>

        </Form>
       </div>     
       
    );
};

export default Comments;