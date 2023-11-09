import React, { useEffect, useState } from 'react';
import './detail-blog-post-page.css';
import DetailedBlogPostGenerator from './DetailedBlog/detailed-blog-post-generator';
import UpAndDownVoteButtonVertical from '../home/button/ReactionButton/up-down-vote-button-vertical';
import BookmarkButton from '../home/button/BookmarkButton/bookmark-button';
import { useParams } from 'react-router';
import Blog from '../../model/blog';
import { blogApi } from '../../config/axios';
import PostCreator from './PostCreatorDetail/post-creator-detail';


const DetailedBlogPostPage: React.FC = () => {

  const { blogId } = useParams();

  const BLOG_URI = '/show/' + blogId;
  console.log(BLOG_URI);

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

  console.log(blog.like.length);

  return (
    <>
      {!loading && (
        <div className="container">
          <div className="detail-blog-post-page-left">
            <UpAndDownVoteButtonVertical upvote={blog.like.length} />
            <BookmarkButton />
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
