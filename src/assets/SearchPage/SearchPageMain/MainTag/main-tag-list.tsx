import { useState, useEffect } from "react";
import { tagApi } from "../../../../config/axios";
import Tag from "../../../../model/tag";
import SearchPageMainTag from "./main-tag";

type MainTagListProp = {
  uri: string;
};

const MainTagList: React.FC<MainTagListProp> = ({ uri }) => {

  const [tags, setTags] = useState<Tag[]>([]);

  const fetchTagData = async () => {
    const response = await tagApi.get(uri, { withCredentials: true });
    setTags(response.data);
  };

  useEffect(() => {
    fetchTagData();
  }, [uri]);

  if (tags.length === 0) {
    return (
      <section style={{ color: "white" }}>
        <h1
          style={{ padding: '15px' }}
        >No tags found</h1>
      </section>
    );
  }

  return (
    <>
      {tags.map((tag) => {
        return (
          <SearchPageMainTag key={tag.tagId} btag={tag} uri={`/count/${tag.tagName}`} />
        );
      })}
    </>
  );
};

export default MainTagList;
