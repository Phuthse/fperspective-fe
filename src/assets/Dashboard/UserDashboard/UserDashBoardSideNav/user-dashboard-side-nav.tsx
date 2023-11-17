import React, { useEffect, useState } from 'react';
import './user-dashboard-side-nav.css';
import { useUserDashboard } from '../user-dashboard-context';
import User from '../../../../model/user';
import Follow from '../../../../model/follow';
import { blogApi, followApi } from '../../../../config/axios';
import Blog from '../../../../model/blog';


type UserDashboardSideNavProps = {
    currentUser?: User;
}


const UserDashboardSideNav: React.FC<UserDashboardSideNavProps> = ({
    currentUser,
}) => {

    const { selectedNavItem, setSelectedNavItem } = useUserDashboard();

    const [CurrentUser, SetCurrentUser] = useState<Follow>();
    const fetchFollowData = async () => {
        try {
            const response = await followApi.get(`show/user/${currentUser?.userID}`, { withCredentials: true });
            SetCurrentUser(response.data);
        } catch (error) {
            console.error('Error fetching follow data:', error);
        }
    };
    useEffect(() => {
        fetchFollowData();
    }, [currentUser]);

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const fetchBlogData = async () => {
        const response = await blogApi.get(`/sort/user/${currentUser?.userID}`, { withCredentials: true })
        setBlogs(response.data);
    };
    useEffect(() => {
        fetchBlogData();
    }, [currentUser]);

    const [likedBlogs, setLikedBlogs] = useState<Blog[]>([]);
    const fetchLikedBlogData = async () => {
        const response = await blogApi.get(`/search/like/${currentUser?.userID}`, { withCredentials: true })
        setLikedBlogs(response.data);
    };
    useEffect(() => {
        fetchLikedBlogData();
    }, [currentUser]);

    const [followers, setFollowers] = useState<string[]>([]);
    const fetchFollowerData = async () => {
        try {
            const response = await followApi.get(`/show/count/${currentUser?.userID}`, { withCredentials: true });
            setFollowers(response.data);
        } catch (error) {
            console.error('Error fetching follow data:', error);
        }
    };
    useEffect(() => {
        fetchFollowerData();
    }, [currentUser]);

    return (
        <div className="user-dashboard-left-nav">
            <nav>
                <ul className="user-dashboard-left-nav-list">
                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'posts' ? 'active-dashboard-option' : ''}`}
                        onClick={() => setSelectedNavItem('posts')}
                    >
                        <a>
                            Recent Blogs
                            <span>{blogs.length}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'liked-posts' ? 'active-dashboard-option' : ''}`}
                        onClick={() => setSelectedNavItem('liked-posts')}
                    >
                        <a>
                            Liked Blogs
                            <span>{likedBlogs.length}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followers' ? 'active-dashboard-option' : ''}`}
                        onClick={() => setSelectedNavItem('followers')}
                    >
                        <a>
                            Followers
                            <span>{followers.length}</span>
                        </a>
                    </li>

                    <li
                        className={`user-dashboard-left-nav-link ${selectedNavItem === 'followingUsers' ? 'active-dashboard-option' : ''}`}
                        onClick={() => setSelectedNavItem('followingUsers')}
                    >
                        <a>
                            Following users
                            <span>{CurrentUser?.followedUser.length}</span>
                        </a>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default UserDashboardSideNav;
