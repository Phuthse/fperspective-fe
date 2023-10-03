import React from 'react';
import './post-creator-detail.css';
import FollowButton from '../../home/button/FollowButton/follow-button';

type BlogPostProps = {
    profilePic: string;
    fullName: string;
    userName: string;
    bio: string;
}


const PostCreator: React.FC<BlogPostProps> = ({
    profilePic,
    fullName,
    userName,
    bio,
}) => {

    return (
        <div className="post-creator">
            <div className='post-creator-name'>
                <a href="#">
                    <img src={profilePic} />
                    <div className='profile-name'>
                        <p>{fullName}</p>
                        <p>{userName}</p>
                    </div>
                </a>
                <div className='follow-button'>
                    <FollowButton />
                </div>
            </div>
            <div className="post-creator-bio">
                <p>{bio}</p>
                <div className="post-creator-details">
                    <ul className="post-creator-details-inner">
                        <li>
                            <div className="key">
                                Location
                            </div>
                            <div className="value">
                                HCM, Vietnam
                            </div>
                        </li>
                        <li>
                            <div className="key">
                                Work
                            </div>
                            <div className="value">
                                Developer at FSoftware
                            </div>
                        </li>
                        <li>
                            <div className="key">
                                Joined
                            </div>
                            <div className="value">
                                <time dateTime="2019-06-29T09:14:12Z" className="date">Jun 29, 2019</time>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default PostCreator;
