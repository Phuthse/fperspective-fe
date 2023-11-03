import React, { useEffect, useState } from 'react';
import './detailed-blog-post.css';
import UserProfile from '../../home/blog/UserProfile/user-profile';
import BiggerBlogTitle from '../BiggerBlogTitle/bigger-blog-title';
import TagList from '../../home/blog/TagList/tag-list';
import PostCommentForm from '../PostCommentForm/post-comment-form';
import PostContent from '../PostContent/post-content';
import PostComment from '../PostCommentSection/Comment/post-comment';
import Blog from '../../../model/blog';
import User from '../../../model/user';
import { userApi } from '../../../config/axios';

type DetailedBlogPostProps = {
    blog: Blog;
    userUri: string;
}


const DetailedBlogPost: React.FC<DetailedBlogPostProps> = ({
    blog,
    userUri,
}) => {

    const date = new Date(blog.uploadDate);

    const initialUser: User = {
        userID: "1",
        username: "test",
        avatarUrl: "test.png",
        status: false
    }

    const [user, setUsers] = useState<User>(initialUser);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri);
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    return (
        <div className="post-container">

            <div>
                <UserProfile
                    key={user.userID}
                    user={user}
                    time={date.toLocaleString("en-US")}
                />
            </div>

            <BiggerBlogTitle title={blog.blogTitle} />

            <TagList tagList={blog.btag} />

            <PostContent content={blog.blogContent} />

            {/* <PostCommentForm ProfilePic='src/assets/images/member-1.png' />

            <PostComment
                ProfilePic={CommentSectionSample.ProfilePic}
                FullName={CommentSectionSample.FullName}
                CommentDate={CommentSectionSample.CommentDate}
                CommentContent={CommentSectionSample.CommentContent}
                Upvote={CommentSectionSample.Upvote}
            /> */}


        </div>
    );
};

export default DetailedBlogPost;
