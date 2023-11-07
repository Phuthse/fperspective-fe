import React, { useEffect, useState } from "react";
import "./blog-post.css";
import PostUserProfile from "../UserProfile/user-profile";
import BlogTitle from "../BlogTitle/blog-title";

import UpAndDownVoteButtonHorizontal from "../../button/ReactionButton/up-down-vote-button-horizontal";
import CommentButton from "../../button/CommentButton/comment-button";
import BookmarkButton from "../../button/BookmarkButton/bookmark-button";
import Blog from "../../../../model/blog";
import { blogApi, userApi } from "../../../../config/axios";
import TagList from "../TagList/tag-list";
import User from "../../../../model/user";
import PostSubjectList from "../BlogSubject/blog-subject-list";


type BlogPostProps = {
  blog: Blog;
  userUri: string;
  userId: string;
};

const HandleApprove = (blogId: string) => () => {
  blogApi.delete(`/approve/${blogId}`, { withCredentials: true })
    .then((response) => {
      console.log('Blog post created:', response.data);
    })
    .catch((error) => {
      console.error('Error creating blog post:', error);
    });
};

const HandleNotApprove = (blogId: string) => () => {
  blogApi.delete(`/delete/${blogId}`, { withCredentials: true })
    .then((response) => {
      console.log('Blog post created:', response.data);
    })
    .catch((error) => {
      console.error('Error creating blog post:', error);
    });
}

const BlogPost: React.FC<BlogPostProps> = ({
  blog,
  userUri,
}) => {
  const date = new Date(blog.uploadDate);

  const initialUser: User = {
    userID: "1",
    username: "test",
    bio: "test",
    email: "test",
    avatarUrl: "test",
    campus: "test",
    term: "test",
    category: "test",
    fullName: "test",
    createdDate: 2,
    status: false,
    role: ""
  }

  const [users, setUsers] = useState<User>(initialUser);
  const fetchUserData = async () => {
    const response = await userApi.get(userUri, { withCredentials: true });
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [userUri]);

  if (blog.status !== false) {

    return (
      <>
        <div className="home-page-post-container">

          <div className="home-user-profile-and-subject">
            <PostUserProfile
              key={users.userID}
              user={users}
              time={date.toLocaleString("en-US")}
            />
            <PostSubjectList subjectList={blog.subject ?? []} />
          </div>

          <BlogTitle blogProp={blog} />

          <TagList tagList={blog.btag} />

          <div className="home-page-post-details">
            <div className="home-page-post-interact">
              <UpAndDownVoteButtonHorizontal upvote={blog.like.length} />
              <CommentButton NumberOfComment={blog.commentId.length} />
            </div>

            <BookmarkButton />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="home-page-post-container">

          <div className="home-user-profile-and-subject">
            <PostUserProfile
              key={users.userID}
              user={users}
              time={date.toLocaleString("en-US")}
            />
            <PostSubjectList subjectList={blog.subject ?? []} />
          </div>

          <BlogTitle blogProp={blog} />

          <TagList tagList={blog.btag} />

          <div className="home-page-post-details">
            <div className="home-page-post-interact">
              <UpAndDownVoteButtonHorizontal upvote={blog.like.length} />
              <CommentButton NumberOfComment={blog.commentId.length} />
            </div>
            <div className="post-approve-button">
              <button className="approve-button" onClick={HandleApprove(blog.blogId)}>Approve</button>
              <button className="not-approve-button" onClick={HandleNotApprove(blog.blogId)}>Don't Approve</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default BlogPost;
