import React from "react";
import "./blog-tags.css";
import Tag from "../../../../model/tag";

type BlogTagsProps = {
  tag: Tag;
};

const BlogTags: React.FC<BlogTagsProps> = ({ tag }) => {

      return (
        <a key={tag.tagID} href="#" className="tag">
          #{tag.tagName}
        </a>
      );
    //}
};

export default BlogTags;
