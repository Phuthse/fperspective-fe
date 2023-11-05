import React from 'react';
import './bigger-blog-title.css'
import Blog from '../../../model/blog';

type BiggerBlogTitleProps = {
    blogTitle: Blog;
}

const BiggerBlogTitle: React.FC<BiggerBlogTitleProps> = ({ blogTitle }) => {
    return (
        <h2 className='bigger-post-title'>
            {blogTitle.blogTitle}
        </h2>
    );
};

export default BiggerBlogTitle;
