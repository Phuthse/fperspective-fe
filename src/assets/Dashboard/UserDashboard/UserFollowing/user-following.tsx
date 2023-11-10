import React, { useEffect, useState } from 'react';
import './user-following.css';
import { followApi, userApi } from '../../../../config/axios';
import User from '../../../../model/user';
import { Link } from 'react-router-dom';

type UserFollowingProps = {
    followingUri: string;
};

const UserFollowing: React.FC<UserFollowingProps> = ({ followingUri }) => {
    const [followingIDs, setFollowingIDs] = useState<string[]>([]);
    const [followingUsers, setFollowingUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchFollowingIdData = async () => {
            try {
                const response = await followApi.get(followingUri, { withCredentials: true });
                setFollowingIDs(response.data.followedUser);
            } catch (error) {
                console.error('Error fetching following IDs:', error);
            }
        };
        fetchFollowingIdData();
    }, [followingUri]);

    useEffect(() => {
        const fetchFollowingUserData = async () => {
            try {
                const usersData = await Promise.all(
                    followingIDs.map(async (userId) => {
                        const response = await userApi.get(`/show/${userId}`, { withCredentials: true });
                        return response.data;
                    })
                );
                setFollowingUsers(usersData);
            } catch (error) {
                console.error('Error fetching following user data:', error);
            }
        };

        // Fetch user data for each user ID
        fetchFollowingUserData();
    }, [followingIDs]);

    console.log('Following IDs:', followingIDs);
    console.log('Following Users:', followingUsers);

    return (
        <div className="user-following-container">
            {followingUsers.map((user) => (
                <div className="user-following" key={user.userID}>
                    <Link to={`/user-profile/${user.userID}`}>
                        <img src={user.avatarUrl} alt={`Profile of ${user.fullName}`} />
                    </Link>
                    <div className="profile-name">
                        <h3>
                            <Link to={`/user-profile/${user.userID}`}>{user.fullName}</Link>
                        </h3>
                        <p>
                            <Link to={`/user-profile/${user.userID}`}>@{user.username}</Link>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserFollowing;
