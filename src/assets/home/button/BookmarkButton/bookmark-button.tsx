import React, { useEffect, useState } from "react";
import { IconBookmarkFilled, IconBookmark } from "@tabler/icons-react";
import "./bookmark-button.css";
// import User from "../../../../model/user";
import Blog from "../../../../model/blog";
import { bookmarkApi, loginApi } from "../../../../config/axios";
import Bookmark from "../../../../model/bookmark";
import User from "../../../../model/user";

type BookmarkProps = {
  currentBlog: Blog;
  userId: string;
};

const BookmarkButton: React.FC<BookmarkProps> = ({ currentBlog, userId }) => {

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<User | undefined>(undefined);
  const [currentUser, setCurrentUser] = useState<Bookmark | undefined>();
  const [loading, setLoading] = useState(true);

  const fetchLoginData = async () => {
    try {
      const response = await loginApi.get("/currentUser", { withCredentials: true });
      setLoginUser(response.data);
    } catch (error) {
      console.error("Error fetching login data:", error);
    }
  };

  const fetchBookmarkData = async () => {
    try {
      if (loginUser?.userID) {
        const response = await bookmarkApi.get(`show/${loginUser.userID}`, {
          withCredentials: true,
        });
        setCurrentUser(response.data);
        console.log(response.data)
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching bookmark data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchLoginData();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (loginUser && !currentUser) {
      fetchBookmarkData();
    }
  }, [loginUser, currentUser]);


  useEffect(() => {
    if (currentUser?.bookmarkedPost) {
      setIsBookmarked(currentUser.bookmarkedPost.includes(currentBlog.blogId));
    }
  }, [currentUser, currentBlog]);

  const handleBookmark = async () => {
    if (currentUser) {
      const updatedData: Bookmark = {
        ...currentUser,
        bookmarkedPost: [...(currentUser?.bookmarkedPost || []), currentBlog.blogId],
      };

      try {
        // Update state first
        setCurrentUser(updatedData);
        setIsBookmarked(true);
        // Then make the API call
        await bookmarkApi.post(`/bookmark`, updatedData, { withCredentials: true });
        console.log("BLOG BOOKMARKED:", updatedData.bookmarkedPost);
      } catch (error) {
        console.error("Error BOOKMARK blog: ", error);
      } finally {
        // Fetch updated data after the state is updated
        fetchBookmarkData();
      }
    }
  };

  const handleUnbookmark = async () => {
    if (currentUser) {
      const updatedData: Bookmark = {
        ...currentUser,
        bookmarkedPost: currentUser?.bookmarkedPost.filter((id) => id !== currentBlog.blogId) || [],
      };

      try {
        // Update state first
        setCurrentUser(updatedData);
        setIsBookmarked(false);

        // Then make the API call
        await bookmarkApi.post(`/unbookmark`, updatedData, { withCredentials: true });
        console.log("BLOG UNBOOKMARKED:", updatedData.bookmarkedPost);
      } catch (error) {
        console.error("Error UNBOOKMARKING blog: ", error);
      } finally {
        // Fetch updated data after the state is updated
        fetchBookmarkData();
      }
    }
  };


  const handleClick = async () => {
    if (isBookmarked) {
      await handleUnbookmark();
    } else {
      await handleBookmark();
    }
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };


  return (
    <>
      {!loading && (
        <div className="bookmark-button" onClick={handleClick}>
          {isBookmarked ? <IconBookmarkFilled /> : <IconBookmark />}
        </div>
      )}
    </>
  );
};

export default BookmarkButton;
