import './user-profile.css';
import UserProfileTopGenerator from './UserProfileTop/user-profile-top-generator';
import UserProfileBodySide from './UserProfileBodySide/user-profile-body-side';
import UserProfileBodyMain from './UserProfileBodyMain/user-profile-body-main';
import { useParams } from 'react-router';

const SAMPLE_TAGS_1 = [
  'css',
  'react',
  'webdev'
]

const UserProfile: React.FC = () => {

  const { userID } = useParams();
  const USER_URI = `/show/${userID}`;

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

            <UserProfileBodyMain
              UserName='Andrew Tate'
              DatePosted='Oct 2 2023'
              PostTitle='How I made 9 digit a month (Not clickbait)'
              PostTags={SAMPLE_TAGS_1}
              NumberOfUpvote={4221}
              NumberOfComment={12}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserProfile;
