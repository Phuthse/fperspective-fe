import { useState, useEffect } from 'react';
import { blogApi, followApi } from '../../../config/axios';
import Blog from '../../../model/blog';
import './user-profile-body-side.css';
import Follow from '../../../model/follow';

type UserProfileBodySideProp = {
    blogUri: string;
    followingUri: string;
    followerUri: string;
}


const UserProfileBodySide: React.FC<UserProfileBodySideProp> =
    ({
        blogUri,
        followingUri,
        followerUri
    }) => {

        const [blogs, setBlogs] = useState<Blog[]>([]);
        const fetchBlogData = async () => {
            const response = await blogApi.get(blogUri, { withCredentials: true })
            setBlogs(response.data);
        };
        useEffect(() => {
            fetchBlogData();
        }, [blogUri]);

        const [following, setFollowing] = useState<Follow>();
        const fetchFollowingData = async () => {
            const response = await followApi.get(followingUri, { withCredentials: true })
            setFollowing(response.data);
        };
        useEffect(() => {
            fetchFollowingData();
        }, [blogUri]);

        const [followers, setFollowers] = useState<string[]>([]);
        const fetchFollowerData = async () => {
            try {
                const response = await followApi.get(followerUri, { withCredentials: true });
                setFollowers(response.data);
            } catch (error) {
                console.error('Error fetching follow data:', error);
            }
        };
        useEffect(() => {
            fetchFollowerData();
        }, []);



        return (
            <div className="user-profile-body-side">

                <span className='side-info'>
                    <svg width="24" height="24">
                        <path d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zm-2 3V4H4v15a1 1 0 001 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"></path>
                    </svg>
                    <span>
                        {blogs.length || 0} perspective shared
                    </span>
                </span>
                <span className='side-info'>
                    <svg width="24" height="24" >
                        <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                    </svg>
                    <span>
                        {following?.followedUser.length || 0} people followed
                    </span>
                </span>

                <span className='side-info'>
                    <svg width="24" height="24" >
                        <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                    </svg>
                    <span>
                        {followers.length} followers
                    </span>
                </span>

            </div>
        );
    };

export default UserProfileBodySide;
