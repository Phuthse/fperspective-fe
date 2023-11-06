import React, { useEffect, useState } from "react";
import Blog from "../../../../model/blog";
import { blogApi } from "../../../../config/axios";
import BlogPost from "./blog-post";

type BlogListProps = {
  uri: string;
};

const BlogList: React.FC<BlogListProps> = ({ uri }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogData = async () => {
    const response = await blogApi.get(uri, { withCredentials: true })
    setBlogs(response.data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchBlogData();
    setIsLoading(false);
  }, [uri]);

  if (isLoading) {
    return (
      <section style={{ color: "white" }}>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <>
      {blogs.map((blog) => {
        const userId = blog.userId;
        const apiUri = "/show/" + userId;
        return (
          <BlogPost
            key={blog.blogId}
            blog={blog}
            userUri={apiUri}
            userId={userId}
          />
        );
      }
      )}
    </>
  );
};

export default BlogList;
