import React from 'react';
import './who-to-follow.css';
import FollowButton from '../../button/FollowButton/follow-button';

type WhoToFollowProps = {
    FullName: string;
    UserName: string;
    ProfileImage: string
}

const WhoToFollow: React.FC<WhoToFollowProps> = ({ FullName, UserName, ProfileImage }) => {
    return (
        <div className="recommend-user">
            <a href="#">
                <img src={ProfileImage} />
                <div className='profile-name'>
                    <p>{FullName}</p>
                    <p>@{UserName}</p>
                </div>
            </a>
            <div className='follow-button'>
                <FollowButton />
            </div>
        </div>
    );
};

export default WhoToFollow;
