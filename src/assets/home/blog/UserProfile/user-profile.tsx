import React from 'react';
import './user-profile.css'
import User from '../../../../model/user';

type UserProfileProps = {
    user: User;
    time: string;
    src: string
}

const UserProfile: React.FC<UserProfileProps> = ({ user, time, src }) => {
    return (
        <div className="user-profile" >
            <a href='#'>
                <img src={src} />
                <div className='user-info'>
                    <p>{user.userName}</p>
                    <small>{time}</small>
                </div>
            </a>
        </div>
    );
};

export default UserProfile;
