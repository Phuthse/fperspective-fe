import React from 'react';
import './blog-title.css'

type BlogTitleProps = {
    title: string;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
    return (

        <h2 className='post-title'>
            <a href='#'>{title}</a>
        </h2>

    );
};

export default BlogTitle;
