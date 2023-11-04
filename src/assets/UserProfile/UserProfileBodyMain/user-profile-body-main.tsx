import { useEffect, useState } from 'react';
import User from '../../../model/user';
import CommentButton from '../../home/button/CommentButton/comment-button';
import UpAndDownVoteButtonHorizontal from '../../home/button/ReactionButton/up-down-vote-button-horizontal';
import './user-profile-body-main.css';
import { userApi } from '../../../config/axios';
import Blog from '../../../model/blog';
import TagList from '../../home/blog/TagList/tag-list';
import { Link } from 'react-router-dom';

type UserProfileBodyMain = {
    blog: Blog;
    userUri: string;
}

const UserProfileBodyMain: React.FC<UserProfileBodyMain> =
    ({
        blog,
        userUri
    }) => {

        const uploadDate = new Date(blog.uploadDate);
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
        const formattedUploadDate = uploadDate.toLocaleString('en-US', options);

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
        }

        const [user, setUser] = useState<User>(initialUser);
        const fetchUserData = async () => {
            const response = await userApi.get(userUri, { withCredentials: true });
            setUser(response.data);
        };
        useEffect(() => {
            fetchUserData();
        }, [userUri]);

        return (

            <div className="user-profile-body-main-post">
                <div className="user-profile-body-main-post-top">

                    <img src={user.avatarUrl} />

                    <div className="user-profile-body-main-post-top-detail">
                        <h4>{user.username}</h4>
                        <p>{formattedUploadDate}</p>
                    </div>

                </div>

                <div className="user-profile-body-main-post-body">

                    <div className="user-profile-body-main-post-body-title">
                        <h2>
                            <Link to={`/detail-blog/${blog.blogId}`}> {blog.blogTitle} </Link>
                        </h2>
                    </div>

                    <div className="user-profile-body-main-post-body-tags">
                        <TagList tagList={blog.btag} />
                    </div>

                    <div className="user-profile-body-main-post-body-bottom">
                        <UpAndDownVoteButtonHorizontal upvote={blog.like.length} />
                        <CommentButton NumberOfComment={blog.commentId.length} />
                    </div>

                </div>
            </div>


        );
    };

export default UserProfileBodyMain;
