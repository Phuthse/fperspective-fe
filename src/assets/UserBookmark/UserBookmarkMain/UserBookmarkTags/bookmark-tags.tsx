import React from 'react';
import './bookmark-tags.css';

type BookmarkTagsProps = {
    Tags: string[]
}

const BookmarkTags: React.FC<BookmarkTagsProps> = ({ Tags }) => {
    return (
        <div className='user-bookmark-post-tag-container'>
            {Tags.map((tag, index) => (
                <a key={index} href={`#${tag}`} className="user-bookmark-post-tag">
                    #{tag}
                </a>
            ))}
        </div>
    );
};

export default BookmarkTags;
