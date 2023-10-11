import React, { useEffect, useState } from "react";
import Blog from "../../../../model/blog";
import { blogApi } from "../../../../config/axios";
import BlogPost from "../BlogPost/blog-post";

type BlogListProps = {
  uri: string;
};

const BlogList: React.FC<BlogListProps> = ({ uri }) => {

  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const fetchBlogData = async () => {
    const response = await blogApi.get(uri);
    setBlogs(response.data);
  };
  useEffect(() => {
    setIsLoading(true)
    fetchBlogData();
    setIsLoading(false)
  }, [uri]);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <>
      {blogs.map((blog) => {
        const apiUri = "/show";
        const userId = blog.userID;

        return (
          <BlogPost
            key={blog.blogID}
            profileImage="src/assets/images/profile-pic.png"
            upvote={8541}
            numberOfComment={10}
            blog={blog}
            userUri={apiUri}
            userID={userId}
          />
        );
      })}
    </>
  );
};

export default BlogList


