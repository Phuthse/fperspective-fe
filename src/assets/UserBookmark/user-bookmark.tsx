import React, { useEffect, useState } from 'react';
import './user-bookmark.css';
import BookmarkList from './UserBookmarkMain/bookmark-main-list';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

const UserBookmark: React.FC = () => {

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data);
        } catch {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    if(!loginUser){
        return(
            <h1 style={{color: 'white'}}>
                Loading...
            </h1>
        )
    }
    else{
        return (
            <>
                <div className="bookmark-container">
                    <div className='user-bookmark-container'>
                        <BookmarkList uri={`list/${loginUser?.userID}`} />
                    </div>
                </div>
            </>
        );
    }
};

export default UserBookmark;
