import React from 'react';
import './blog-title.css';
import Blog from '../../../../model/blog';
import { Link } from 'react-router-dom';

type BlogTitleProps = {
    blogProp: Blog;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ blogProp }) => {
    return (

        <h2 className='home-page-post-title'>
            <Link to={`/detail-blog/${blogProp.blogId}`}> {blogProp.blogTitle} </Link>
        </h2>

    );
};

export default BlogTitle;
