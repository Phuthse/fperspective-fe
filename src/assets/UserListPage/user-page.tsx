import React, { useEffect, useState } from 'react';
import './user-page.css';
import UserItemList from './UserItem/user-item-list';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const UserListPage: React.FC = () => {

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    if (loginUser?.role === 'ROLE_USER') {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`
    }

    return (
        <>
            <div className="user-page-list-container">
                <UserItemList userUri='/show' />
            </div>
        </>
    );
};

export default UserListPage;
