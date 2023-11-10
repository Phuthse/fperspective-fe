import BlogTags from "./blog-tags";
import Tag from "../../../../model/tag";
import { useState, useEffect } from "react";
import { tagApi } from "../../../../config/axios";

type TagListProps = {
  uri: string;
};

const TagList: React.FC<TagListProps> = ({ uri }) => {

  const [tags, setTags] = useState<Tag[]>([]);

  const fetchTagData = async () => {
    const response = await tagApi.get(uri, { withCredentials: true });
    setTags(response.data);
  };

  useEffect(() => {
    fetchTagData();
  }, [uri]);

  return (
    <div className="home-page-post-tags">
      {tags
        .map((tag) => {
          return <BlogTags key={tag.tagId} uri={`/show/${tag.tagId}`} />;
        })}
    </div>
  );
};

export default TagList;