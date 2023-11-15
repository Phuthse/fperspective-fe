import './user-profile.css';
import UserProfileTopGenerator from './UserProfileTop/user-profile-top-generator';
import UserProfileBodySide from './UserProfileBodySide/user-profile-body-side';
import UserProfileBlogList from './UserProfileBodyMain/user-profile-main-blog-list';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { loginApi } from '../../config/axios';
import User from '../../model/user';

function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay));
}

const UserProfile: React.FC = () => {

  /* REDIRECT TO LOGIN PAGE IF NOT LOGGED IN */
  const [currentLoginUser, setCurrentLoginUser] = useState<User>();
  const fetchCurrentLoginData = async () => {
    try {
      const response = await loginApi.get("/currentUser", { withCredentials: true });
      setCurrentLoginUser(response.data);
    }
    catch {
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`
    }
  };
  useEffect(() => {
    fetchCurrentLoginData();
  }, [loginApi]);
  useEffect(() => {
    const delay = setTimeout(() => {
      timeout(200);
    }, 700);
    return () => clearTimeout(delay);
  }, [currentLoginUser]);


  const { userID } = useParams();

  const USER_URI = `/show/${userID}`;
  const BLOG_SHARED_URI = `/search/user/${userID}/-1`;
  const USER_FOLLOWING_URI = `/show/user/${userID}`;
  const USER_FOLLOWER_URI = `/show/count/${userID}`;

  return (
    <div className="user-profile-container">
      <div className='user-profile-main-content'>
        <UserProfileTopGenerator
          userUri={USER_URI}
        />
        <div className="user-profile-body-container">
          <UserProfileBodySide
            blogUri={BLOG_SHARED_URI}
            followingUri={USER_FOLLOWING_URI}
            followerUri={USER_FOLLOWER_URI}
          />
          <div className="user-profile-body-main">
            <UserProfileBlogList
              blogUri={BLOG_SHARED_URI}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
