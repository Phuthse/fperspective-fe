import './user-profile.css';
import UserProfileTopGenerator from './UserProfileTop/user-profile-top-generator';
import UserProfileBodySide from './UserProfileBodySide/user-profile-body-side';
import UserProfileBlogList from './UserProfileBodyMain/user-profile-main-blog-list';
import { useParams } from 'react-router';


const UserProfile: React.FC = () => {

  const { userID } = useParams();
  const USER_URI = `/show/${userID}`;
  const BLOG_URI = `/search/user/${userID}`

  return (
    <div className="user-profile-container">
      <div className='user-profile-main-content'>
        <UserProfileTopGenerator
          userUri={USER_URI}
        />
        <div className="user-profile-body-container">
          <UserProfileBodySide
            PostShared={10}
            TagFollowed={32}
            SubjectFollowed={10}
            Following={12}
            Follwers={23}
          />
          <div className="user-profile-body-main">
            <UserProfileBlogList
              blogUri={BLOG_URI}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
