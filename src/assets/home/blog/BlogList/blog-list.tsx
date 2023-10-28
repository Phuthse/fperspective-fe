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
    const response = await blogApi.get(uri, {withCredentials: true})
    console.log(response.data);
    setBlogs(response.data);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchBlogData();
    setIsLoading(false);
  }, [uri]);

// IGNORE OK?

// const [blogs, setBlogs] = useState<Blog[]>([]);
// const fetchBlogData = async () => {
//     const response = await fetch(
//       blogApi.toString() + uri,
//       {method: 'GET', redirect: "follow", credentials: "include"}
//     ).then((response) => response);

//     if(response.redirected){
//       document.location = response.url;
//     }

//     const data = await response.json();
//     console.log(response);
//     console.log(data);
//     setBlogs(data);
//   }
//   useEffect(() => {
//     setIsLoading(true);
//     fetchBlogData();
//     setIsLoading(false);
//   }, [uri]);

//NOTHING HERE

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
        const userId = blog.userId;
        const apiUri = "/show/" + userId;
        if (blog.status === true) {
          return (
            <BlogPost
              key={blog.blogID}
              upvote={blog.like.length}
              numberOfComment={blog.commentId.length}
              blog={blog}
              userUri={apiUri}
              userId={userId}
            />
          );
        }

      })}
    </>
  );
};

export default BlogList;
