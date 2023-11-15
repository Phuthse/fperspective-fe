import React, { useEffect, useState } from 'react';
import './detail-blog-post-page.css';
import DetailedBlogPostGenerator from './DetailedBlog/detailed-blog-post-generator';
import BookmarkButton from '../home/button/BookmarkButton/bookmark-button';
import { useParams } from 'react-router';
import Blog from '../../model/blog';
import { blogApi, loginApi } from '../../config/axios';
import PostCreator from './PostCreatorDetail/post-creator-detail';
import HeartButtonVertical from '../home/button/ReactionButton/heart-button-vertical';
import User from '../../model/user';


const DetailedBlogPostPage: React.FC = () => {

  const [, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    try {
      const response = await loginApi.get("/currentUser", { withCredentials: true });
      setLoginUser(response.data);
    } catch {
      window.location.href = 'http://localhost:5173/login';
    }
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const { blogId } = useParams();

  const BLOG_URI = '/show/' + blogId;

  const initialBlog: Blog = {
    blogId: "1",
    blogTitle: "Example Blog",
    blogContent: "This is an example blog content.",
    userId: "user1",
    btag: [],
    like: [],
    uploadDate: Date.now(),
    status: true,
    subject: [],
  };

  const [blog, setBlog] = useState<Blog>(initialBlog);
  const [loading, setLoading] = useState<boolean>(true)
  const fetchBlogData = async () => {
    const response = await blogApi.get(BLOG_URI, { withCredentials: true });
    setBlog(response.data);
    setLoading(false)
  };
  useEffect(() => {
    fetchBlogData();
  }, [BLOG_URI]);

  const userId = blog.userId;
  const USER_URI = 'show/' + userId;

  return (
    <>
      {!loading && (
        <div className="container">
          <div className="detail-blog-post-page-left">
            <HeartButtonVertical currentBlog={blog} />
            <BookmarkButton currentBlog={blog} />
          </div>

          <div className='detailed-post-container'>
            <DetailedBlogPostGenerator
              blogUri={BLOG_URI}
            />
          </div>

          <div className='detail-blog-post-page-right'>
            <PostCreator
              userUri={USER_URI}
            />
          </div >

        </div >
      )}

    </>
  );
};

export default DetailedBlogPostPage;
