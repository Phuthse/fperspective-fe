import React, { useEffect, useState } from "react";
import "./blog-post.css";
import UserProfile from "../UserProfile/user-profile";
import BlogTitle from "../BlogTitle/blog-title";
import UpAndDownVoteButtonHorizontal from "../../button/ReactionButton/up-down-vote-button-horizontal";
import CommentButton from "../../button/CommentButton/comment-button";
import BookmarkButton from "../../button/BookmarkButton/bookmark-button";
import Blog from "../../../../model/blog";
import { userApi } from "../../../../config/axios";
import TagList from "../TagList/tag-list";
import User from "../../../../model/user";

type BlogPostProps = {
  upvote: number;
  numberOfComment: number;
  blog: Blog;
  userUri: string;
  userId: string;
};

const BlogPost: React.FC<BlogPostProps> = ({
  upvote,
  numberOfComment,
  blog,
  userUri,
}) => {

  const date = new Date(blog.uploadDate);

  const initialUser: User = {
    userID: "1",
    username: "test",
    avatarUrl: "test.png",
    status: false
  }
  

  const [users, setUsers] = useState<User>(initialUser);
  const fetchUserData = async () => {
    const response = await userApi.get(userUri, {withCredentials: true});
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [userUri]);


  return (
    <>
      {/* <div className="home-page-post-container">
        {users
          .filter((user) => user.userId === userId)
          .map((user) => {
            return (
              <UserProfile
                key={user.userId}
                user={user}
                time={blog.uploadDate}
              />
            );
          })} */}

    <div className="home-page-post-container">
          
            <UserProfile
              key={users.userID}
              user={users}
              time={date.toLocaleString("en-US")}
            />

          <BlogTitle title={blog.blogTitle}/>

        <TagList tagList={blog.btag} />

        <div className="home-page-post-details">
          <div className="home-page-post-interact">
            <UpAndDownVoteButtonHorizontal upvote={upvote} />
            <CommentButton NumberOfComment={numberOfComment} />
          </div>

          <BookmarkButton />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
