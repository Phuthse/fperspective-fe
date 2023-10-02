import React from 'react';
import './home-page.css'; // Import your CSS file for styling
import TopNav from './TopNavigation/top-nav';
import SideNav from './SideNavigation/side-nav';
import TrendingTag from './RightSideNav/Trending/trending';
import WhoToFollow from './RightSideNav/WhoToFollow/who-to-follow';
import BlogPost from './blog/BlogPost/blog-post';

const blogTags = ["JavaScript", "React.js", "CSS", "Web Development"];

const HomePage: React.FC = () => {
  return (
    <>
      <TopNav />
      <div className="container">
        {/* Left nav bar */}
        <SideNav />
        {/* Main content */}
        <div className='main-content'>
          
          <BlogPost
            fullName="John Doe"
            timeUpload="2023-10-02"
            blogTitle="Getting Started with React.js"
            blogTags={blogTags}
            upvote={50}
            numberOfComment={10}
          />

        </div>

        {/* Right nav bar (treding tags)*/}
        <div className='right-sidebar'>
          <div className='trending-tags'>
            <h3>Trending Tags</h3>

            <TrendingTag tag='javascript' numberOfPost={24821} />
            <TrendingTag tag='css' numberOfPost={32123} />
            <TrendingTag tag='python' numberOfPost={213232} />
            <TrendingTag tag='java' numberOfPost={88421} />
            <TrendingTag tag='C++' numberOfPost={64212} />

          </div>

          <div className='follow-recomendations'>

            <h3>Who to Follow</h3>
            <WhoToFollow FullName='Alivia Johnson' UserName='alivia' ProfileImage='src/assets/images/member-1.png' />
            <WhoToFollow FullName='Mike Tyson' UserName='michela' ProfileImage='src/assets/images/member-2.png' />
            <WhoToFollow FullName='Felxi Avid' UserName='f3lix' ProfileImage='src/assets/images/member-3.png' />

          </div>
        </div >

      </div >
    </>
  );
};

export default HomePage;
