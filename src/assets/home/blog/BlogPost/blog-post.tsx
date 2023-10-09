import React, { useEffect, useState } from "react";
import "./blog-post.css";
import UserProfile from "../UserProfile/user-profile";
import BlogTitle from "../BlogTitle/blog-title";
import UpAndDownVoteButtonHorizontal from "../../button/ReactionButton/up-down-vote-button-horizontal";
import CommentButton from "../../button/CommentButton/comment-button";
import BookmarkButton from "../../button/BookmarkButton/bookmark-button";
import Blog from "../../../../model/blog";
import User from "../../../../model/user";
import { userApi } from "../../../../config/axios";
import TagList from "../TagList/tag-list";

type BlogPostProps = {
  profileImage: string;
  upvote: number;
  numberOfComment: number;
  blog: Blog;
  userUri: string;
  userID: string;
};

const BlogPost: React.FC<BlogPostProps> = ({
  profileImage,
  upvote,
  numberOfComment,
  blog,
  userUri,
  userID,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUserData = async () => {
    const response = await userApi.get(userUri);
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [userUri]);


  return (

    <div className="post-container">
      {users
        .filter((user) => user.userID === userID)
        .map((user) => {
          return (
            <UserProfile
              key={user.userID}
              user={user}
              time={blog.uploadDate}
              profileImage={profileImage}
            />
          );
        })}

      <BlogTitle title={blog.blogTitle} />
      
      <TagList uri={"/show"} tagID={blog.tagID}/>

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
