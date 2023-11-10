import React, { useEffect, useState } from "react";
import Bookmark from "../../../model/bookmark";
import { bookmarkApi } from "../../../config/axios";
import UserBookmark from "../user-bookmark";

type BookmarkListProps = {
  uri: string;
};

const BookmarkList: React.FC<BookmarkListProps> = ({ uri }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookmark, setBookmark] = useState<Bookmark[]>([]);

  const fetchBookmarkData = async () => {
    try {
      const response = await bookmarkApi.get(uri, { withCredentials: true });
      setBookmark(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching bookmark data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarkData();
  }, [uri]);

  if (isLoading) {
    return (
      <section style={{ color: "white" }}>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (bookmark.length === 0) {
    return (
      <section style={{ color: "white" }}>
        <h1
          style={{padding: '15px'}}
        >No posts found</h1>
      </section>
    );
  }

  return (
    <>  
        return (
          <UserBookmark
          />
        );
    </>
  );
};

export default BookmarkList;
