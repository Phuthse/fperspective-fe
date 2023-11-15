import React from "react";
import './recent-post.css';
import BlogTitle from "../../../home/blog/BlogTitle/blog-title";
import Blog from "../../../../model/blog";
import HeartButton from "../../../home/button/ReactionButton/heart-button";

// Make these attribute into arrays
type RecentPostProps = {
  blog: Blog;
};

const LikedPost: React.FC<RecentPostProps> = ({ blog }) => {

  return (
    <div className="post-container">
      <div className="recent-post-content">
        <BlogTitle blogProp={blog} />
        <div className="post-details">
          <div className="post-interact">
            <HeartButton currentBlog={blog} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedPost;
