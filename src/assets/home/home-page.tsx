import React, { useState } from 'react';
import './home-page.css'
import SideNav from './SideNavigation/side-nav';
import BlogListLatest from './blog/BlogListLatest/blog-list-latest';
import HomePageFilter from './blog/HomePageFilter/home-page-filter';
import UpAndDownVoteButtonHorizontal from './button/ReactionButton/up-down-vote-button-horizontal';
import CommentButton from './button/CommentButton/comment-button';
import BookmarkButton from './button/BookmarkButton/bookmark-button';
import RightSideBar from './RightSideNav/right-side-nav';


const HomePage: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('Latest');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <div className="container">

        <SideNav />

        <div className='home-page-main-content'>
          <HomePageFilter onFilterChange={handleFilterChange} />
          {currentFilter === 'Latest' ? (

            <>
              <BlogListLatest uri={"/show"} />
              <div className="home-page-post-container">

                <div className="home-page-user-profile" >
                  <a href='#'>
                    <img src='https://image.tienphong.vn/w890/Uploaded/2023/vkwfkx_mdf/2018_06_09/Talisca_01_NICQ.png' />
                    <div className='home-page-user-info'>
                      <p>Bob Man</p>
                      <small>12 Oct 2032</small>
                    </div>
                  </a>
                </div>

                <h2 className='home-page-post-title'>
                  <a href='#'>How do I commit tax fraud</a>
                </h2>

                <div className="home-page-post-tags">
                  <a href="#" className="home-page-tag">
                    #css
                  </a>
                  <a href="#" className="home-page-tag">
                    #react
                  </a>
                </div>

                <div className="home-page-post-details">
                  <div className="home-page-post-interact">
                    <UpAndDownVoteButtonHorizontal upvote={111} />
                    <CommentButton NumberOfComment={11} />
                  </div>

                  <BookmarkButton />
                </div>
              </div>
            </>

          ) : currentFilter === 'Top' || currentFilter === 'Week' ? (
            <h1> Top Week</h1>
          ) : currentFilter === 'Month' ? (
            <h1> Top Month</h1>
          ) : currentFilter === 'Year' ? (
            <h1> Top Year</h1>
          ) : currentFilter === 'AllTime' ? (
            <h1> Top All</h1>
          ) : null}
        </div>

        {/* Right nav bar (trending tags)*/}
        <RightSideBar />
      </div>
    </>
  );
};

export default HomePage;
