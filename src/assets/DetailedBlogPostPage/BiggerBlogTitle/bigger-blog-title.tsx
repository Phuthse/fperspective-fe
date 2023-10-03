import React from 'react';
import './bigger-blog-title.css'

type BiggerBlogTitleProps = {
    title: string;
}

const BiggerBlogTitle: React.FC<BiggerBlogTitleProps> = ({ title }) => {
    return (
        <h2 className='post-title'>
            {title}
        </h2>
    );
};

export default BiggerBlogTitle;
