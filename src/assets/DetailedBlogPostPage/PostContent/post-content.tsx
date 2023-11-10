import React from 'react';
import './post-content.css';
import Blog from '../../../model/blog';

type PostContentProp = {
    blogContent: Blog;
}

const PostContent: React.FC<PostContentProp> = ({ blogContent }) => {

    return (
        <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: blogContent.blogContent }} />
        </div>
    );
};

export default PostContent;
