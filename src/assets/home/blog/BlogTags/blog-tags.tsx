import React, { useEffect, useState } from 'react';
import './blog-tags.css';
import Tag from '../../../../model/tag';
import { tagApi } from '../../../../config/axios';

type BlogTagsProps = {
    uri: string
}

const BlogTags: React.FC<BlogTagsProps> = ({ uri }) => {

  const btag : Tag = {
    tagId: "",
    tagName: "",
    status: false
  }

  const [tags, setTags] = useState<Tag>(btag);
  const fetchUserData = async () => {
    const response = await tagApi.get(uri, { withCredentials: true });
    setTags(response.data);
  };
  useEffect(() => {
    fetchUserData();
  }, [uri]);

  if(tags.status === true){
        return (
          <a key={tags.tagId} href="#" className="home-page-tag">
            #{tags.tagName}
          </a>
      );
    }
};

export default BlogTags;
