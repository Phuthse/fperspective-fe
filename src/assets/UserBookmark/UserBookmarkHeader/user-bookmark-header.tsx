import React from 'react';
import './user-bookmark-header.css';

type BookmarkHeaderProp = {
    count: number;
}

const BookmarkHeader: React.FC<BookmarkHeaderProp> = ({ count }) => {
    return (
        <header className='user-bookmark-header'>
            <h1>Your bookmark ({count})</h1>
        </header>
    );
};
export default BookmarkHeader;