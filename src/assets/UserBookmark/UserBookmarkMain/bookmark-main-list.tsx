import React, { useEffect, useState } from "react";
import { blogApi } from "../../../config/axios";
import Blog from "../../../model/blog";
import BookmarkHeader from "../UserBookmarkHeader/user-bookmark-header";
import BlogPost from "../../home/blog/BlogPost/blog-post";

type BookmarkListProps = {
  uri: string;
};

const BookmarkList: React.FC<BookmarkListProps> = ({ uri }) => {

  // const [bookmarkBlogId, setBookmarkBlogId] = useState<string[]>([]);
  const [bookmarkBlogs, setBookmarkBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBookmarkData = async () => {
      try {
        const response = await blogApi.get(uri, { withCredentials: true });
        setBookmarkBlogs(response.data);
      } catch (error) {
        console.error('Error fetching bookmark:', error);
      }
    };
    fetchBookmarkData();
  }, [uri]);

  // useEffect(() => {
  //   const fetchBookmarkBlogsData = async () => {
  //     try {
  //       const bookmarksData = await Promise.all(
  //         bookmarkBlogId.map(async (bookmarkId) => {
  //           const response = await blogApi.get(`/show/${bookmarkId}`, { withCredentials: true });
  //           return response.data;
  //         })
  //       );
  //       setBookmarkBlogs(bookmarksData);
  //     } catch (error) {
  //       console.error('Error fetching following user data:', error);
  //     }
  //   };
  //   fetchBookmarkBlogsData();
  // }, [bookmarkBlogId]);



  return (
    <>
      <BookmarkHeader count={bookmarkBlogs.length} />
      {bookmarkBlogs.map((bookmarkBlog) => {
        const userUri = "/show/" + bookmarkBlog.userId;
        return (
          <BlogPost blog={bookmarkBlog} userUri={userUri} />
        )
      })}
    </>
  );
}
export default BookmarkList;
