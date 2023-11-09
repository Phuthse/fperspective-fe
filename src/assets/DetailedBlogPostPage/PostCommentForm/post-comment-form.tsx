import React, { useEffect, useState } from 'react';
import './post-comment-form.css';
import { commentApi, loginApi } from '../../../config/axios';
import User from '../../../model/user';
import { useParams } from 'react-router';

type CommentFormProps = {
    ProfilePic?: string;
}

const PostCommentForm: React.FC<CommentFormProps> = ({ ProfilePic }) => {

    const [comment, setComment] = useState<string>();

    const { blogId } = useParams();

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const commentedDate = new Date();

    const handleComment = () => {

        const commentData = {
            commentContent: comment,
            userId: loginUser?.userID,
            uploadDate: commentedDate,
            blogId: blogId,
            like: [],
            status: true,
        }

        commentApi
            .post(`/show`, commentData, { withCredentials: true })
            .then((response) => {
                window.location.href = "http://localhost:5173/detail-user";
                console.log("Comment created:", response.data);
            })
            .catch((error) => {
                console.error("Error commenting: ", error);
            });
    };

    return (
        <>
            <form className='comment-form'>
                <div className="comment-profile-and-text">
                    <span><img src={ProfilePic} /></span>
                    <textarea
                        className='comment-box'
                        rows={6}
                        placeholder='What are you thoughts...'
                        value={comment}
                        onChange={handleTextareaChange}
                    />
                </div>
                <button className='comment-publish-button' onClick={handleComment}>Publish</button>
            </form>

        </>
    );
};

export default PostCommentForm;
