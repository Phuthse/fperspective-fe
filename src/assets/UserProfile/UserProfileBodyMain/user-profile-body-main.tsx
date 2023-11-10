import { useEffect, useState } from 'react';
import User from '../../../model/user';
import './user-profile-body-main.css';
import { commentApi, userApi } from '../../../config/axios';
import Blog from '../../../model/blog';
import TagList from '../../home/blog/BlogTags/blog-tag-list';
import { Link } from 'react-router-dom';
import PostUserProfile from '../../home/blog/UserProfile/user-profile';
import HeartButton from '../../home/button/ReactionButton/heart-button';
import CommentButton from '../../home/button/CommentButton/comment-button';

type UserProfileBodyMain = {
    blog: Blog;
    userUri: string;
}

const UserProfileBodyMain: React.FC<UserProfileBodyMain> = ({ blog, userUri }) => {

    const uploadDate = new Date(blog.uploadDate);

    const initialUser: User = {
        userID: "1",
        username: "test",
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
        loginProvider: '',
        name: ''
    }

    const [user, setUser] = useState<User>(initialUser);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri, { withCredentials: true });
        setUser(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    const [numberOfComment, setNumberOfComment] = useState<number>(0);
    const fetchCommentData = async () => {
        const response = await commentApi.get(`/sort/latest/${blog.blogId}`, { withCredentials: true });
        setNumberOfComment(response.data.length);
    };
    useEffect(() => {
        fetchCommentData();
    }, []);

    return (

        <div className="user-profile-body-main-post">
            <PostUserProfile
                user={user}
                time={uploadDate.toLocaleString("en-US")}
            />
            <div className="user-profile-body-main-post-body">
                <div className="user-profile-body-main-post-body-title">
                    <h2>
                        <Link to={`/detail-blog/${blog.blogId}`}> {blog.blogTitle} </Link>
                    </h2>
                </div>
                <div className="user-profile-body-main-post-body-tags">
                    <TagList uri={`/search/blog/${blog.blogId}`} />
                </div>
                <div className="user-profile-body-main-post-body-bottom">
                    <HeartButton currentBlog={blog} />
                    <Link to={`/detail-blog/${blog.blogId}`}>
                        <CommentButton NumberOfComment={numberOfComment} />
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default UserProfileBodyMain;
