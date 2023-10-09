import { useEffect, useState } from "react";
import BlogTags from "../BlogTags/blog-tags";
import { tagApi } from "../../../../config/axios";
import Tag from "../../../../model/tag";

type TagListProps = {
  uri: string;
  tagID: string[];
};

const TagList: React.FC<TagListProps> = ({ uri, tagID }) => {
//   console.log(tagID);
  const total = tagID.length;
  const [tags, setTags] = useState<Tag[]>([]);
  const fetchTagData = async () => {
  const response = await tagApi.get(uri);
  setTags(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    
    fetchTagData();
  }, [uri]);


  return (
    <div className="post-tags">
      {tags
        // .filter((tag) => {
        //     tag.tagID === tagID[0]
        // })
        .map((tag) => {
          let i = 0;
          for(i; i <= total; i++){
            if(tag.tagID === tagID[i]){
              return <BlogTags key={tag.tagID} tag={tag} />;
            }
          }
        })}
    </div>
  );
};

export default TagList;
