import React from 'react';
import './home-page.css'; // Import your CSS file for styling
import TopNav from './TopNavigation/top-nav';
import SideNav from './SideNavigation/side-nav';
import TrendingTag from './RightSideNav/Trending/trending';
import WhoToFollow from './RightSideNav/WhoToFollow/who-to-follow';
import BlogPost from './blog/BlogPost/blog-post';

const blogTags1 = ["JavaScript", "React.js", "CSS", "Web Development"];
const blogTags2 = ["Java", "Next.js", "Web Developing"];

const trendingTags = ["React", "JavaScript", "CSS", 'C++'];
const numberOfPost = [24241, 47723, 5491, 2123];

const recommendedFullName = ['Alivia Johnson', 'Mike Tyson', 'Linda Hellgate'];
const recommendedUserName = ['alivia', 'michael', 'lind4'];
const recommendedProfileImage = ['src/assets/images/member-1.png', 'src/assets/images/member-2.png', 'src/assets/images/member-3.png'];

const HomePage: React.FC = () => {
  return (
    <>
      <TopNav />
      <div className="container">
        <SideNav />

        <div className='main-content'>
          <BlogPost
            fullName="John Doe"
            timeUpload="2023-10-02"
            src='src/assets/images/profile-pic.png'
            blogTitle="Getting Started with React.js"
            blogTags={blogTags1}
            upvote={8541}
            numberOfComment={10}
          />

          <BlogPost
            fullName="Felix Avid"
            timeUpload="2023-07-10"
            src='src/assets/images/member-3.png'
            blogTitle="Front-end jobs that you have never heard of"
            blogTags={blogTags2}
            upvote={9212}
            numberOfComment={162}
          />

        </div>

        {/* Right nav bar (treding tags)*/}
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

        </div >
      </div >
    </>
  );
};

export default HomePage;
