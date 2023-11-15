import React, { useEffect, useState } from "react";
import "./blog-post.css";
import PostUserProfile from "../UserProfile/user-profile";
import BlogTitle from "../BlogTitle/blog-title";
import Blog from "../../../../model/blog";
import { blogApi, commentApi, loginApi, userApi } from "../../../../config/axios";
import TagList from "../BlogTags/blog-tag-list";
import User from "../../../../model/user";
import PostSubjectList from "../BlogSubject/blog-subject-list";
import CommentButton from "../../button/CommentButton/comment-button";
import { Link } from "react-router-dom";
import HeartButton from "../../button/ReactionButton/heart-button";

type BlogPostProps = {
  blog: Blog;
  userUri: string;
};

const HandleApprove = (blogId: string) => () => {
  blogApi.delete(`/approve/${blogId}`, { withCredentials: true })
    .then((response) => {
      console.log('Blog post approve:', response.data);
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/approve`;
    })
    .catch((error) => {
      console.error('Error creating blog post:', error);
    });
};

const HandleNotApprove = (blogId: string) => () => {
  blogApi
    .delete(`/delete/${blogId}`, { withCredentials: true })
    .then((response) => {
      console.log('Blog post not approved:', response.data);
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/approve`;
    })
    .catch((error) => {
      console.error('Error creating blog post:', error);
    });
};

const HandleDelete = (blogId: string) => () => {
  blogApi
    .delete(`/delete/${blogId}`, { withCredentials: true })
    .then((response) => {
      window.location.reload();
      console.log("blog deleted:", response.data);
    })
    .catch((error) => {
      console.error("Error deleting blog: ", error);
    });
};

const BlogPost: React.FC<BlogPostProps> = ({
  blog,
  userUri,
}) => {
  const date = new Date(blog.uploadDate);

  const initialUser: User = {
    userID: "1",
    username: "Loading...",
    bio: "test",
    email: "test",
    avatarUrl: "test",
    campus: "test",
    term: "test",
    category: "test",
    fullName: "test",
    createdDate: 2,
    status: false,
    role: "",
    loginProvider: "GOOGLE",
    name: ""
  }

  const [users, setUsers] = useState<User>(initialUser);
  const fetchUserData = async () => {
    const response = await userApi.get(userUri, { withCredentials: true });
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [userUri]);

  const [numberOfComment, setNumberOfComment] = useState<number>(0);
  const fetchCommentData = async () => {
    const response = await commentApi.get(`/sort/latest/${blog.blogId}`, { withCredentials: true });
    setNumberOfComment(response.data.length);
  };
  useEffect(() => {
    fetchCommentData();
  }, []);


  const [loginUser, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", { withCredentials: true });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);
  

  if (blog.status === true) {
    return (
      <>
        <div className="home-page-post-container">
          <div className="home-user-profile-and-subject">
            <PostUserProfile
              key={users.userID}
              user={users}
              time={date.toLocaleString("en-US")}
            />
            <PostSubjectList uri={`/search/blog/${blog.blogId}`} />
          </div>
          <BlogTitle blogProp={blog} />
          <TagList uri={`/search/blog/${blog.blogId}`} />
          <div className="home-page-post-details">
            <div className="home-page-post-interact">
              <HeartButton currentBlog={blog} />
              <Link to={`/detail-blog/${blog.blogId}`}>
                <CommentButton NumberOfComment={numberOfComment} />
              </Link>
            </div>
            {loginUser?.role === "ROLE_ADMIN" && (
              <div className="admin-post-delete-button">
                <button className="admin-delete-button" onClick={HandleDelete(blog.blogId)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else if (blog.status === false) {
    return (
      <>
        <div className="home-page-post-container">
          <div className="home-user-profile-and-subject">
            <PostUserProfile
              key={users.userID}
              user={users}
              time={date.toLocaleString("en-US")}
            />
            <PostSubjectList uri={`/search/blog/${blog.blogId}`} />
          </div>
          <BlogTitle blogProp={blog} />
          <TagList uri={`/search/blog/${blog.blogId}`} />
          <div className="home-page-post-details">
            <div className="home-page-post-interact">
              <HeartButton currentBlog={blog} />
              <Link to={`/detail-blog/${blog.blogId}`}>
                <CommentButton NumberOfComment={numberOfComment} />
              </Link>
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
