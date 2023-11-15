import React from 'react';
import './user-page-header.css';

type BookmarkHeaderProp = {
    count: number;
}

const UserListPagekHeader: React.FC<BookmarkHeaderProp> = ({ count }) => {
    return (
        <header className='user-list-page-header'>
            <h1>All user ({count})</h1>
        </header>
    );
};
export default UserListPagekHeader;