import React, { useEffect, useState } from 'react';
import './user-bookmark.css';
import BookmarkList from './UserBookmarkMain/bookmark-main-list';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const UserBookmark: React.FC = () => {
    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get("/currentUser", { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    

    return (
        <div className='user-bookmark-container'>
            <BookmarkList uri={`show/${loginUser?.userID}`} />
        </div>
    );
};

export default UserBookmark;
