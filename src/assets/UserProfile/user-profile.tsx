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
              UserName='Nguyen Do Chung Quy'
              DatePosted='Oct 2 2023'
              PostTitle='Top 10 Reacr projects to get started with'
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
