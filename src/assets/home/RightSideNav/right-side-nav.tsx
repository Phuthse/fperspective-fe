import React from 'react';
import './right-side-nav.css';
import TrendingTag from './Trending/trending';
import WhoToFollow from './WhoToFollow/who-to-follow';

const trendingTags = ["React", "JavaScript", "CSS", 'C++'];
const numberOfPost = [24241, 47723, 5491, 2123];

const recommendedFullName = ['Alivia Johnson', 'Mike Tyson', 'Linda Hellgate'];
const recommendedUserName = ['alivia', 'michael', 'lind4'];
const recommendedProfileImage = ['src/images/member-1.png', 'src/images/member-2.png', 'src/images/member-3.png'];


const RightSideBar: React.FC = () => {
    return (
        <div className='right-sidebar'>
          <TrendingTag
            tags={trendingTags}
            numberOfPost={numberOfPost}
          />
          <WhoToFollow
            FullName={recommendedFullName}
            UserName={recommendedUserName}
            ProfileImage={recommendedProfileImage}
          />
        </div>
    );
};
export default RightSideBar;
