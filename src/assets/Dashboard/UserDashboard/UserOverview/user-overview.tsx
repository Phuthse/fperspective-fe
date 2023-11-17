import React, { useEffect, useState } from 'react';
import './user-overview.css';
import { loginApi, blogApi } from '../../../../config/axios';
import Blog from '../../../../model/blog';
import User from '../../../../model/user';

const formatNumber = (number: number): string => {
    if (number >= 1000000) {
        const integralPart = Math.floor(number / 1000000);
        const decimalPart = Math.floor((number % 1000000) / 100000);
        return `${integralPart}.${decimalPart}m`;
    } else if (number >= 1000) {
        const integralPart = Math.floor(number / 1000);
        const decimalPart = Math.floor((number % 1000) / 100);
        return `${integralPart}.${decimalPart}k`;
    }
    return number.toString();
};

const UserOverview: React.FC = () => {
    const [loginUser, setLoginUser] = useState<User>();
    const [blog, setBlog] = useState<Blog[]>([]);

    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };

    const fetchBlogData = async () => {
        const response = await blogApi.get(`/sort/user/${loginUser?.userID}`, { withCredentials: true });
        setBlog(response.data);
    };

    useEffect(() => {
        fetchLoginData();
    }, []);

    useEffect(() => {
        if (loginUser?.userID) {
            fetchBlogData();
        }
    }, [loginUser?.userID]);

    const totalUpvotes = blog.reduce((total, post) => total + post.like.length, 0);
    const totalPosts = blog.length;

    return (
        <header className='user-overview-container'>
            <h1>Dashboard</h1>
            <div className="user-overview">
                <div className="user-total-upvote">
                    <strong>{formatNumber(totalUpvotes)}</strong>
                    <span>Total Likes</span>
                </div>
                <div className="user-total-post">
                    <strong>{formatNumber(totalPosts)}</strong>
                    <span>Total Blogs</span>
                </div>
            </div>
        </header>
    );
};

export default UserOverview;
