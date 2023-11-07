import React, { useEffect, useState } from 'react';
import './detailed-blog-post.css';
import PostUserProfile from '../../home/blog/UserProfile/user-profile';
import BiggerBlogTitle from '../BiggerBlogTitle/bigger-blog-title';
import TagList from '../../home/blog/TagList/tag-list';
//import PostCommentForm from '../PostCommentForm/post-comment-form';
//import PostComment from '../PostCommentSection/Comment/post-comment';
import PostContent from '../PostContent/post-content';
import Blog from '../../../model/blog';
import User from '../../../model/user';
import { blogApi, userApi } from '../../../config/axios';
import PostSubjectList from '../../home/blog/BlogSubject/blog-subject-list';

type DetailedBlogPostProps = {
    detailBlog: Blog;
    userUri: string;
}

const HandleApprove = (blogId: string) => () => {
    blogApi.delete(`/approve/${blogId}`, { withCredentials: true })
        .then((response) => {
            console.log('Blog post created:', response.data);
        })
        .catch((error) => {
            console.error('Error creating blog post:', error);
        });
};


const DetailedBlogPost: React.FC<DetailedBlogPostProps> = ({
    detailBlog,
    userUri,
}) => {

    const date = new Date(detailBlog.uploadDate);

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

    const [user, setUsers] = useState<User>(initialUser);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri, { withCredentials: true });
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    if (detailBlog.status !== false) {
        return (
            <div className="detailed-post-container">

                <div className='user-profile-and-approve-button'>
                    <PostUserProfile
                        key={user.userID}
                        user={user}
                        time={date.toLocaleString("en-US")}
                    />
                    <PostSubjectList
                        subjectList={detailBlog.subject}
                    />
                </div>
                <BiggerBlogTitle blogTitle={detailBlog} />
                <TagList tagList={detailBlog.btag} />
                <div className="detail-post-divider" />
                <PostContent blogContent={detailBlog} />

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
    }
    else {
        return (
            <div className="detailed-post-container">

                <div className='user-profile-and-approve-button'>
                    <PostUserProfile
                        key={user.userID}
                        user={user}
                        time={date.toLocaleString("en-US")}
                    />
                    <div className="post-approve-button">
                        <button className="detail-approve-button" onClick={HandleApprove(detailBlog.blogId)}>Approve</button>
                        <button className="not-detail-approve-button">Don't Approve</button>
                    </div>

                </div>
                <BiggerBlogTitle blogTitle={detailBlog} />
                <TagList tagList={detailBlog.btag} />
                <div className="detail-post-divider" />
                <PostContent blogContent={detailBlog} />

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
    }

};

export default DetailedBlogPost;
