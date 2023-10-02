import React from 'react';
import './who-to-follow.css';
import FollowButton from '../../button/FollowButton/follow-button';

type WhoToFollowProps = {
    FullName: string[];
    UserName: string[];
    ProfileImage: string[];
}

const WhoToFollow: React.FC<WhoToFollowProps> = ({ FullName, UserName, ProfileImage }) => {
    return (
        <div className='follow-recomendations'>
            <h3>Who to Follow</h3>
            {FullName.map((fullName, index) => (
                <div key={index} className="recommend-user">
                    <a href="#">
                        <img src={ProfileImage[index]} alt={`Profile of ${fullName}`} />
                        <div className='profile-name'>
                            <p>{fullName}</p>
                            <p>@{UserName[index]}</p>
                        </div>
                    </a>
                    <div className='follow-button'>
                        <FollowButton />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default WhoToFollow;
