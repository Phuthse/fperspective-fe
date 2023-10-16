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
    const response = await blogApi.get(uri)
    setBlogs(response.data);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchBlogData();
    setIsLoading(false);
  }, [uri]);

// const [blogs, setBlogs] = useState();
// const fetchBlogData = async () => {
//   console.log(blogApi.toString() + uri);
//     const response = await fetch(
//       blogApi.toString() + uri,
//       {method: 'GET', redirect: "follow", credentials: "include"}
//     ).then((response) => response);

//     if(response.redirected){
//       document.location = response.url;
//     }

//     const data = await response.json();
//     console.log(data);
//     setBlogs(data);
//   }
//   useEffect(() => {
//     setIsLoading(true);
//     fetchBlogData();
//     setIsLoading(false);
//   }, [uri]);


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
        const userId = blog.userId;
        if (blog.status === true) {
          return (
            <BlogPost
              key={blog.blogID}
              profileImage="src/assets/images/profile-pic.png"
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
