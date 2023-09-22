import React from 'react';
import './post.css'

const Post = ({post,handlePost}) => {
    const {title,body,id} =post;
    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
            <button type="button" onClick={()=>handlePost(id)}>Delete Post</button>
        </div>
    );
};

export default Post;