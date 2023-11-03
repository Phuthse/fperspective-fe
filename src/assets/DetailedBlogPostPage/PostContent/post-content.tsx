import React from 'react';
import './post.content.css';

type PostContentProp = {
    content: string;
}


const PostContent: React.FC<PostContentProp> = ({ content }) => {

    return (

        <div className="post-content">
            <p>{content}</p>
        </div>
    );
};

export default PostContent;
