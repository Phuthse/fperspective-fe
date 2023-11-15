import React, { useEffect, useState } from "react";
import { IconBookmarkFilled, IconBookmark } from "@tabler/icons-react";
import "./bookmark-button.css";
// import User from "../../../../model/user";
import Blog from "../../../../model/blog";
import { bookmarkApi } from "../../../../config/axios";
import Bookmark from "../../../../model/bookmark";

type BookmarkProps = {
  currentBlog: Blog;
  userId: string;
};

const BookmarkButton: React.FC<BookmarkProps> = ({ currentBlog, userId }) => {

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<Bookmark>();
  const [loading, setLoading] = useState(true);

  const fetchBookmarkData = async () => {
    try {
      const response = await bookmarkApi.get(`show/${userId}`, {
        withCredentials: true,
      });
      setCurrentUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookmark data:", error);
    }
  };

  useEffect(() => {
    fetchBookmarkData();
  }, [userId]);

  useEffect(() => {
    if (currentUser?.bookmarkedPost.includes(currentBlog.blogId)) {
      setIsBookmarked(true);
    }
  }, [currentUser, currentBlog.blogId]);

  const handleUnbookmark = () => {
    const updatedBookmark = currentUser?.bookmarkedPost.filter(
      (id) => id !== currentBlog.blogId
    );
    const bookmarkData = {
      ...currentUser,
      bookmarkedPost: updatedBookmark || [],
    };
    setCurrentUser(bookmarkData as Bookmark);

    console.log(bookmarkData);
    bookmarkApi
      .post(`/unbookmark`, bookmarkData, { withCredentials: true })
      .then((response) => {
        console.log("BLOG UNBOOKMARKED:", response.data);
        console.log(bookmarkData.bookmarkedPost);
      })
      .catch((error) => {
        console.error("Error UNBOOKMARKING blog: ", error);
      });
  };

  const handleBookmark = () => {
    const bookmarkData  = {
      ...currentUser,
      bookmarkedPost: [
        ...(currentUser?.bookmarkedPost || []),
        currentBlog.blogId,
      ],
    };
    setCurrentUser(bookmarkData as Bookmark);

    console.log(bookmarkData);
    bookmarkApi
      .post(`/bookmark`, bookmarkData, { withCredentials: true })
      .then((response) => {
        console.log("BLOG BOOKMARKED:", response.data);
        console.log(bookmarkData.bookmarkedPost);
      })
      .catch((error) => {
        console.error("Error BOOKMARK blog: ", error);
      });
  };

  const toggleBookmark = () => {
    if (isBookmarked) {
      setIsBookmarked(!isBookmarked);
      handleUnbookmark();
    } else {
      setIsBookmarked(!isBookmarked);
      handleBookmark();
    }
  };

  return (
    <>
      {!loading && (
        <div className="bookmark-button" onClick={toggleBookmark}>
          {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
        </div>
      )}
    </>
  );
};

export default BookmarkButton;
