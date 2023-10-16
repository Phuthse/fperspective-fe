import React from 'react';
import './user-following.css';

type UserFollowingProps = {
    FullName: string[];
    UserName: string[];
    ProfileImage: string[];
}

const UserFollowing: React.FC<UserFollowingProps> = ({ FullName, UserName, ProfileImage }) => {
    return (
        <div className='user-following-container'>
            {FullName.map((fullName, index) => (
                <div className="user-following">
                    <a href="#">
                        <img src={ProfileImage[index]} alt={`Profile of ${fullName}`} />
                    </a>

                    <div className="profile-name">
                        <h3>
                            <a href="#">
                                {fullName}
                            </a>
                        </h3>

                        <p>
                            <a href="#">
                                @{UserName[index]}
                            </a>
                        </p>
                    </div>
                </div>
            ))}

        </div>

    );
};
export default UserFollowing;
