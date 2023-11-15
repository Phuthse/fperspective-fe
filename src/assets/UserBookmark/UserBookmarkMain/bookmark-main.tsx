import React, { useEffect, useState } from 'react';
import './bookmark-main.css';
import TagList from '../../home/blog/BlogTags/blog-tag-list';
import Blog from '../../../model/blog';
import { userApi } from '../../../config/axios';
import User from '../../../model/user';

type BookmarkMainProps = {
    bookmarkBlog: Blog;
    userUri: string;
}

const BookmarkMain: React.FC<BookmarkMainProps> = ({ bookmarkBlog, userUri }) => {

    const initialUser: User = {
        userID: "1",
        username: "Loading...",
        bio: "test",
        email: "test",
        avatarUrl: "test",
        campus: "test",
        term: "test",
        category: "test",
        fullName: "test",
        createdDate: 2,
        status: false,
        role: "",
        loginProvider: "GOOGLE",
        name: ""
    }
    const [users, setUsers] = useState<User>(initialUser);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri, { withCredentials: true });
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    const date = new Date(bookmarkBlog.uploadDate);
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    });

    return (
        <>
            <div className='user-bookmark-main'>
                <div className='user-bookmark-profile'>
                    <a href="#">
                        <img src={users.avatarUrl} />
                    </a>
                </div>
                <div className="user-bookmark-content">
                    <div className='user-bookmark-post-title'>
                        <h3>
                            <a href='#'>{bookmarkBlog.blogTitle}</a>
                        </h3>
                    </div>
                    <div className="user-bookmark-post-detail">
                        <div className="user-bookmark-profile-name">
                            <h4>
                                <a href="#">
                                    {users.username}
                                </a>
                                <span> - {formattedDate}</span>
                            </h4>
                        </div>
                        <TagList uri={`/search/blog/${bookmarkBlog.blogId}`} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default BookmarkMain;