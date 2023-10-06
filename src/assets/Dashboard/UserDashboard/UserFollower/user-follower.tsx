import React from 'react';
import './user-follower.css';

type UserFollowerProps = {
    FullName: string[];
    UserName: string[];
    ProfileImage: string[];
}

const UserFollower: React.FC<UserFollowerProps> = ({ FullName, UserName, ProfileImage }) => {
    return (
        <div className='user-follower-container'>
            {FullName.map((fullName, index) => (
                <div className="user-follower">
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
export default UserFollower;
