import React from 'react';
import './blog-title.css'

type BlogTitleProps = {
    title: string;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
    return (
        <div>
            <h2 className='post-title'>
                <a href='#'>{title}</a>
            </h2>
        </div>
    );
};

export default BlogTitle;
