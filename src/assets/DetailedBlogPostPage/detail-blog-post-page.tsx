import React from 'react';
import './detail-blog-post-page.css';
import TopNav from '../home/TopNavigation/top-nav';
import DetailedBlogPost from './DetailedBlog/detailed-blog-post';
import PostCreator from './PostCreatorDetail/post-creator-detail';
import UpAndDownVoteButtonVertical from '../home/button/ReactionButton/up-down-vote-button-vertical';
import BookmarkButton from '../home/button/BookmarkButton/bookmark-button';


const blogTags = ["JavaScript", "React.js", "CSS", "Web Development"];

const DetailedBlogPostPage: React.FC = () => {
  return (
    <>
      <TopNav />
      <div className="container">


        {/* Buttons ?? */}
        <div className="left-side-nav">

          <UpAndDownVoteButtonVertical upvote={2399} />
          <BookmarkButton/>

        </div>

        {/* Blog post with content and comment section */}
        <div className='detailed-post-container'>
          <DetailedBlogPost
            fullName="John Doe"
            timeUpload="2023-10-02"
            src='src/assets/images/profile-pic.png'
            blogTitle="Getting Started with React.js"
            blogTags={blogTags}
            numberOfComment={10}
          />

        </div>

        {/* Post creator */}
        <div className='right-side-nav'>
          <PostCreator
            profilePic='src/assets/images/profile-pic.png'
            fullName='John Doe'
            userName='@johnD'
            bio='Professional game developer, lead developer of the game HADES'
          />
        </div >

      </div >
    </>
  );
};

export default DetailedBlogPostPage;
