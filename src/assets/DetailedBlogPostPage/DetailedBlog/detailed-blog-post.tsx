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
import { blogApi, loginApi, userApi } from '../../../config/axios';
import PostSubjectList from '../../home/blog/BlogSubject/blog-subject-list';

type DetailedBlogPostProps = {
    detailBlog: Blog;
    userUri: string;
}

const HandleApprove = (blogId: string) => () => {
    blogApi.delete(`/approve/${blogId}`, { withCredentials: true })
        .then((response) => {
            console.log('Blog post created:', response.data);
            window.location.href = "http://localhost:5173/approve";
        })
        .catch((error) => {
            console.error('Error creating blog post:', error);
        });
};

const HandleNotApprove = (blogId: string) => () => {
    blogApi.delete(`/delete/${blogId}`, { withCredentials: true })
        .then((response) => {
            console.log('Blog post created:', response.data);
            window.location.href = "http://localhost:5173/approve";
        })
        .catch((error) => {
            console.error('Error creating blog post:', error);
        });
}



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
        role: ''
    }

    const [user, setUsers] = useState<User>(initialUser);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri, { withCredentials: true });
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);


    const handleDelete = () => {
        blogApi
            .delete(`/delete/${detailBlog.blogId}`, { withCredentials: true })
            .then((response) => {
                window.location.href = "http://localhost:5173";
                console.log("blog deleted:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting blog: ", error);
            });
    };

    if (detailBlog.status !== false) {
        return (
            <div className="detailed-post-container">

                {loginUser?.userID === user.userID && (
                    <div className="post-manage-button">
                        <button className="post-edit-button">Edit</button>
                        <button className="post-delete-button" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                )}
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
                <TagList uri={`/search/blog/${detailBlog.blogId}`} />
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
                <div className="post-approve-button">
                    <button className="detail-approve-button" onClick={HandleApprove(detailBlog.blogId)}>Approve</button>
                    <button className="not-detail-approve-button" onClick={HandleNotApprove(detailBlog.blogId)}>Don't Approve</button>
                </div>
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
                <TagList uri={`/search/blog/${detailBlog.blogId}`} />
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
