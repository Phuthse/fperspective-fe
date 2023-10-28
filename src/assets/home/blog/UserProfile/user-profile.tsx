import React from 'react';
import './user-profile.css'
import User from '../../../../model/user';

type UserProfileProps = {
    user: User;
    time: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, time }) => {
    return (
        <div className="home-page-user-profile" >
            <a href='#'>
                <img src={user.avatarUrl} />
                <div className='user-info'>
                    <p>{user.username}</p>
                    <small>{time}</small>
                </div>
            </a>
        </div>
    );
};

export default UserProfile;
