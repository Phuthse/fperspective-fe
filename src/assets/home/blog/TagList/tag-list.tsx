import BlogTags from "../BlogTags/blog-tags";
import Tag from "../../../../model/tag";

type TagListProps = {
  tagList: Tag[]
};

const TagList: React.FC<TagListProps> = ({ tagList }) => {
  return (
    <div className="home-page-post-tags">
      {tagList
        .filter((tag) => tag.status === true)
        .map((tag) => {
          return <BlogTags key={tag.tagId} tag={tag} />;
        })}
    </div>
  );
};

export default TagList;

