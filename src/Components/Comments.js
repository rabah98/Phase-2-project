import React from 'react';
import { useState } from 'react';

const Comments = () => {
    const [comment, setComment] = useState("")
    const [commentContainer, setContainer] = useState('')
    function handleSubmit (e) {
        e.preventDefault()
        setContainer(comment)
        
    }
    return (
       
       <form onSubmit={handleSubmit}>
            
        <input
          type="text"
          name="name"
          placeholder="Enter your comment here..."
          className="input-text"
          onChange={(e) => setComment(e.target.value)}
        />
            <img src='https://i.pinimg.com/736x/8f/1b/09/8f1b09269d8df868039a5f9db169a772.jpg' alt='non-mega-employee' />
            <button type='submit' >Post a comment</button>
            <p>{commentContainer}</p>
       </form>
            
       
    );
};

export default Comments;