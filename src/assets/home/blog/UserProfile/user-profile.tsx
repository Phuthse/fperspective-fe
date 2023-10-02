import React from 'react';
import './user-profile.css'

type UserProfileProps = {
    name: string;
    time: string;
}

const UserProfile: React.FC<UserProfileProps> = ({name, time}) => {
    return (
        <div className="user-profile">
            <img src='src/assets/images/profile-pic.png' />
            <div className='user-info'>
                <p>{name}</p>
                <small>{time}</small>
            </div>
        </div>
    );
};

export default UserProfile;
