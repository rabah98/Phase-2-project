import React from 'react';
import { useState } from 'react';

const Comments = ({addNewComment}) => {
    const [comment, setComment] = useState("")
    function handleSubmit (e) {
        e.preventDefault()
        addNewComment(comment)
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
    
            <button type='submit' >Post a comment</button>
            
       </form>
            
       
    );
};

export default Comments;