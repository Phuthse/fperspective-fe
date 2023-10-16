import React from 'react';
import './user-bookmark-header.css';

type BookmarkHeaderProp = {
    NumberOfBookmark : number;
}


const BookmarkHeader: React.FC<BookmarkHeaderProp> = ({NumberOfBookmark}) => {
    return (

        <header className='user-bookmark-header'>
            <h1>Your bookmark ({NumberOfBookmark})</h1>
            <input
                className='user-bookmark-header-searchbox'
                type='text'
                placeholder='Search bookmark...'
            />
        </header>
    );
};
export default BookmarkHeader;
