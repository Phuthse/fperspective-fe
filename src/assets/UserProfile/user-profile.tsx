import './user-profile.css';
import UserProfileTop from './UserProfileTop/user-profile-top';
import UserProfileBodySide from './UserProfileBodySide/user-profile-body-side';
import UserProfileBodyMain from './UserProfileBodyMain/user-profile-body-main';

const SAMPLE_TAGS_1 = [
  'css',
  'react',
  'webdev'
]

const SAMPLE_TAGS_2 = [
  'programming',
  'nodejs',
  'vitejs'
]

const UserProfile: React.FC = () => {
  return (
    <div className="user-profile-container">

      <div className='user-profile-main-content'>

        <UserProfileTop
          ProfileImage='https://cdn.vox-cdn.com/thumbor/RcAdlMhw-adDQnJiVWKRPUSP10M=/0x0:2024x1038/1200x800/filters:focal(989x320:1311x642)/cdn.vox-cdn.com/uploads/chorus_image/image/71278865/Screen_Shot_2022_08_23_at_4.22.21_PM.0.png'
          UserFullName='Andrew Tate'
          UserBio="I make the big bucks, while you're still driving a Ford Focus, I drive Bugatti"
          UserCampus='Ha Noi'
          DateJoined='Sep 30, 2023'
          UserWork='GIGA CHAD TOP G'
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

            <UserProfileBodyMain
              UserName='Andrew Tate='
              DatePosted='Sep 12 2023'
              PostTitle='How I slept with the queen of England (Story time)'
              PostTags={SAMPLE_TAGS_2}
              NumberOfUpvote={9999}
              NumberOfComment={1}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserProfile;
