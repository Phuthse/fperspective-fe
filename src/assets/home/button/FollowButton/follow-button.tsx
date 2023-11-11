import React, { useEffect, useState } from 'react';
import User from '../../../../model/user';
import { followApi, loginApi } from '../../../../config/axios';
import Follow from '../../../../model/follow';

type FollowButtonProps = {
    followUser: User;
}

const UserFollowButton: React.FC<FollowButtonProps> = ({ followUser }) => {

    const [loginUser, setLoginUser] = useState<User>();
    const [currentUser, setCurrentUser] = useState<Follow>();
    const [isFollowed, setIsFollowed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get('/currentUser', { withCredentials: true });
            setLoginUser(response.data);
        } catch (error) {
            console.error('Error fetching login data:', error);
        }
    };

    const fetchFollowData = async () => {
        try {
            const response = await followApi.get(`show/user/${loginUser?.userID}`, { withCredentials: true });
            setCurrentUser(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching follow data:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchLoginData();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (loginUser) {
            fetchFollowData();
        }
    }, [loginUser, currentUser]);

    useEffect(() => {
        if (currentUser?.followedUser.includes(followUser.userID)) {
            setIsFollowed(true);
        }
    }, [currentUser, followUser.userID]);

    const handleUnfollow = () => {
        const updatedFollowedUser = currentUser?.followedUser.filter(id => id !== followUser.userID);
        const followData = {
            ...currentUser,
            followedUser: updatedFollowedUser || []
        };

        followApi.post(`/update`, followData, { withCredentials: true })
            .then((response) => {
                console.log('USER UNFOLLOWED:', response.data);
            })
            .catch((error) => {
                console.error('Error UNFOLLOWING user: ', error);
            });
    };

    const handleFollow = () => {
        const followData = {
            ...currentUser,
            followedUser: [
                ...(currentUser?.followedUser || []),
                followUser.userID
            ]
        };

        followApi.post(`/update`, followData, { withCredentials: true })
            .then((response) => {
                console.log('USER FOLLOWED:', response.data);
            })
            .catch((error) => {
                console.error('Error FOLLOWING user: ', error);
            });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {

        if (isFollowed) {
            setIsFollowed(!isFollowed)
            handleUnfollow();
        } else {
            setIsFollowed(!isFollowed)
            handleFollow();
        }
    };

    return (
        <>
            {!loading && (
                <button
                    style={{
                        width: '100px',
                        backgroundColor: isFollowed ? (isHovered ? 'red' : 'black') : 'white',
                        color: isFollowed ? (isHovered ? '#efefef' : '#efefef') : 'black',
                        border: isFollowed ? (isHovered ? '2px solid red' : '2px solid white') : '2px solid black',
                        borderRadius: '20px',
                        padding: '6px 12px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
                    }}
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {isFollowed ? (isHovered ? 'Unfollow' : 'Following') : 'Follow'}
                </button>
            )}
        </>
    );
};

export default UserFollowButton;
