import React, { useEffect, useState } from "react";
import "./main-tag.css";
import Tag from "../../../../model/tag";
import { tagApi } from "../../../../config/axios";

type SearchPageMainTagProp = {
  btag: Tag;
  uri: string;
};

const SearchPageMainTag: React.FC<SearchPageMainTagProp> = ({ btag, uri }) => {
  const [count, setCount] = useState<number>(1);
  const fetchUserData = async () => {
    const response = await tagApi.get(uri, { withCredentials: true });
    setCount(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [tagApi]);

  return (
    <div className="search-page-main-tag">
      <span>#</span>
      <div className="search-page-main-tag-detail">
        <h2>
          <a href="#">{btag.tagName}</a>
        </h2>
        <p>{count} posts</p>
      </div>
    </div>
  );
};

export default SearchPageMainTag;
