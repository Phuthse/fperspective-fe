import React, { useEffect, useState } from "react";
import "./blog-post.css";
import UserProfile from "../UserProfile/user-profile";
import BlogTitle from "../BlogTitle/blog-title";
import BlogTags from "../BlogTags/blog-tags";
import UpAndDownVoteButtonHorizontal from "../../button/ReactionButton/up-down-vote-button-horizontal";
import CommentButton from "../../button/CommentButton/comment-button";
import BookmarkButton from "../../button/BookmarkButton/bookmark-button";
import Blog from "../../../../model/blog";
import User from "../../../../model/user";
import { userApi } from "../../../../config/axios";

type BlogPostProps = {
  profileImage: string;
  blogTags: string[];
  upvote: number;
  numberOfComment: number;
  blog: Blog;
  uri: string;
  userID: string;
};

const BlogPost: React.FC<BlogPostProps> = ({
  profileImage,
  blogTags,
  upvote,
  numberOfComment,
  blog,
  uri,
  userID,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUserData = async () => {
    const response = await userApi.get(uri);
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [uri]);

  return (
    
    <div className="post-container">
      <div>
        {users.filter(user => user.userID === userID).map((user) => {

          return (
            <UserProfile
              key={user.userID}
              user={user}
              time={blog.uploadDate}
              profileImage={profileImage}
            />
          )

        })}
      </div>

      <BlogTitle title={blog.blogTitle} />

      <BlogTags tags={blogTags} />

      <div className="post-details">
        <div className="post-interact">
          <UpAndDownVoteButtonHorizontal upvote={upvote} />
          <CommentButton NumberOfComment={numberOfComment} />
        </div>

        <BookmarkButton />
      </div>
    </div>
  );
};

export default BlogPost;
