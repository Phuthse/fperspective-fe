import { useEffect, useState } from 'react';
import { blogApi } from '../../../config/axios';
import UserProfileBodyMain from './user-profile-body-main';
import './user-profile-body-main.css';
import Blog from '../../../model/blog';

type UserProfileBlogListProp = {
    blogUri: string
}

const UserProfileBlogList: React.FC<UserProfileBlogListProp> =
    ({
        blogUri
    }) => {

        const [blogs, setBlogs] = useState<Blog[]>([]);
        const fetchBlogData = async () => {
            const response = await blogApi.get(blogUri, { withCredentials: true })
            setBlogs(response.data);
        };
        useEffect(() => {
            fetchBlogData();
        }, [blogUri]);

        return (
            <>
                {
                    blogs.map((blog) => {
                        const userId = blog.userId;
                        const apiUri = "/show/" + userId;
                        if (blog.status === true) {
                            return (
                                < UserProfileBodyMain
                                    blog={blog}
                                    userUri={apiUri}
                                />
                            );
                        }
                    })
                }
            </>
        );
    };

export default UserProfileBlogList;

