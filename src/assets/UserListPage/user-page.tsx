import React from 'react';
import './user-page.css';
import UserItemList from './UserItem/user-item-list';

const UserListPage: React.FC = () => {
    return (
        <>
            <div className="user-page-list-container">
                <UserItemList userUri='/show' />
            </div>
        </>
    );
};

export default UserListPage;
