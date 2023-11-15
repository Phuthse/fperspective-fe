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
    try {
      const response = await blogApi.get(uri, { withCredentials: true });
      setBlogs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, [uri]);

  if (isLoading) {
    return (
      <section style={{ color: "white" }}>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section style={{ color: "white" }}>
        <h1
          style={{ padding: '15px' }}
        >No posts found</h1>
      </section>
    );
  }

  if (!isLoading) {


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
  }
};

export default BlogList;
