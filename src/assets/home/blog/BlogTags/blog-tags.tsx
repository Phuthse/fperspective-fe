import React from 'react';
import './blog-tags.css'

type BlogTagsProps = {
    tags: string[];
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags }) => {
    return (

        <div className="post-tags">
            {tags.map((tag, index) => (
                <a key={index} href='#' className='tag'>
                    #{tag}
                </a>
            ))}
        </div>
    );
};

export default BlogTags;
