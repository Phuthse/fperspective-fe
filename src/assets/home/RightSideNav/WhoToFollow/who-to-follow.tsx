import React, { useEffect, useState } from 'react';
import './who-to-follow.css';
import FollowButton from '../../button/FollowButton/follow-button';
import { userApi } from '../../../../config/axios';
import User from '../../../../model/user';

type WhoToFollowProps = {
    uri: string;
    currentUser: string;
}

const WhoToFollow: React.FC<WhoToFollowProps> = ({ uri, currentUser }) => {

      const [users, setUsers] = useState<User[]>([]);
      const fetchUserData = async () => {
        const response = await userApi.get(uri, {withCredentials: true});
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
                return(
                    <div key={filteredUser.userID} className="recommend-user">
                        <a href="#">
                            <img src={filteredUser.avatarUrl} alt={`Profile of ${filteredUser.username}`} />
                            <div className='profile-name'>
                                <p>{filteredUser.username}</p>
                                {/* <p>@{UserName[index]}</p> */}
                            </div>
                        </a>
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
