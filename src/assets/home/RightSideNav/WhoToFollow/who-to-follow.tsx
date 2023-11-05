import React, { useEffect, useState } from 'react';
import './who-to-follow.css';
import FollowButton from '../../button/FollowButton/follow-button';
import { userApi } from '../../../../config/axios';
import User from '../../../../model/user';
import { Link } from 'react-router-dom';

type WhoToFollowProps = {
    uri: string;
    currentUser: string;
}

const WhoToFollow: React.FC<WhoToFollowProps> = ({ uri, currentUser }) => {

    const [users, setUsers] = useState<User[]>([]);
    const fetchUserData = async () => {
        const response = await userApi.get(uri, { withCredentials: true });
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [uri]);


    return (
        <>
            <div className='follow-recomendations'>
                <h3>Who to Follow</h3>
                {users.filter((user) => user.username !== currentUser)
                    .map((filteredUser) => {
                        return (
                            <div key={filteredUser.userID} className="recommend-user">
                                <Link to={`/user-profile/${filteredUser.userID}`}>
                                    <img src={filteredUser.avatarUrl} alt={`Profile of ${filteredUser.username}`} />
                                    <div className='profile-name'>
                                        <p>{filteredUser.fullName}</p>
                                        {/* <p>@{filteredUser.username}</p> */}
                                        <p>@noname</p>
                                    </div>
                                </Link>
                                <div className='follow-button'>
                                    <FollowButton />
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    );
};
export default WhoToFollow;
