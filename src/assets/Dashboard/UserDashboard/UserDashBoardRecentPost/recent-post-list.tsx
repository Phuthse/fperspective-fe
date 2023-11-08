import React, { useEffect, useState } from "react";
import Blog from "../../../../model/blog";
import { blogApi } from "../../../../config/axios";
import RecentPost from "./recent-post";

type RecentBlogListProps = {
    uri: string;
};

const RecentBlogList: React.FC<RecentBlogListProps> = ({ uri }) => {

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const fetchBlogData = async () => {
        const response = await blogApi.get(uri, { withCredentials: true })
        setBlogs(response.data);
    };
    useEffect(() => {
        fetchBlogData();
    }, [uri]);

    return (
        <>
            {blogs.map((blog) => {
                if (blog.status === true) {
                    return (
                        <RecentPost
                            blog={blog}
                        />
                    );
                }
            })}
        </>
    );
};

export default RecentBlogList;
