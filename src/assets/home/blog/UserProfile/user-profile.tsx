import React from 'react';
import './user-profile.css'

type UserProfileProps = {
    name: string;
    time: string;
    src: string
}

const UserProfile: React.FC<UserProfileProps> = ({ name, time, src }) => {
    return (
        <div className="user-profile" >
            <a href='#'>
                <img src={src} />
                <div className='user-info'>
                    <p>{name}</p>
                    <small>{time}</small>
                </div>
            </a>
        </div>
    );
};

export default UserProfile;
