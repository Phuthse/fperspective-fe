import React, { useEffect, useState } from "react";
import "./post-comment.css";
import Comment from "../../../../model/comment";
import { commentApi, loginApi, userApi } from "../../../../config/axios";
import User from "../../../../model/user";
import { Link, useParams } from "react-router-dom";
import HeartButtonComment from "../../../home/button/ReactionButton/heart-button-comment";

type PostCommentProps = {
    comment: Comment;
};

const PostComment: React.FC<PostCommentProps> = ({ comment }) => {
    const [commentUser, setCommentUser] = useState<User>();
    const fetchUserData = async () => {
        const response = await userApi.get(`/show/${comment.userId}`, {
            withCredentials: true,
        });
        setCommentUser(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get("currentUser", { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    const postDate = new Date(comment.uploadDate);
    const currentDate = new Date();
    const timeDiffMillis = currentDate.getTime() - postDate.getTime();
    const timeDiffMinutes = Math.floor(timeDiffMillis / (1000 * 60)) as number; // Explicitly cast to number

    let formattedTime = "";
    if (timeDiffMinutes < 60) {
        formattedTime = "less than 1 hour ago";
    } else if (timeDiffMinutes < 1440) {
        const hoursAgo = Math.floor(timeDiffMinutes / 60);
        formattedTime = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else if (timeDiffMinutes < 10080) {
        const daysAgo = Math.floor(timeDiffMinutes / 1440);
        formattedTime = `${postDate.toLocaleDateString()} (${daysAgo} ${daysAgo === 1 ? "day" : "days"
            } ago)`;
    } else if (timeDiffMinutes < 40320) {
        const weeksAgo = Math.floor(timeDiffMinutes / 10080);
        formattedTime = `${postDate.toLocaleDateString()} (${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"
            } ago)`;
    } else if (timeDiffMinutes < 525600) {
        const monthsAgo = Math.floor(timeDiffMinutes / 40320);
        formattedTime = `${postDate.toLocaleDateString()} (${monthsAgo} ${monthsAgo === 1 ? "month" : "months"
            } ago)`;
    } else {
        const yearsAgo = Math.floor(timeDiffMinutes / 525600);
        formattedTime = `${postDate.toLocaleDateString()} (${yearsAgo} ${yearsAgo === 1 ? "year" : "years"
            } ago)`;
    }

    const { blogId } = useParams();

    const [isEditMode, setEditMode] = useState(false);
    const [updatedCommentContent, setUpdatedCommentContent] = useState(comment.commentContent);

    const handleUpdate = () => {

        const newComment = {
            ...comment,
            commentContent: updatedCommentContent,
        }

        console.log(newComment)

        commentApi
            .post(`/update`, newComment, { withCredentials: true })
            .then((response) => {
                setEditMode(false);
                console.log("Comment updated:", response.data);
                window.location.reload()
            })
            .catch((error) => {
                console.error("Error updating comment: ", error);
            });

    };

    const handleDelete = () => {
        commentApi
            .delete(`/delete/${comment.commentId}`, { withCredentials: true })
            .then((response) => {
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/detail-blog/${blogId}`;
                console.log("Comment deleted:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting comment: ", error);
            });
    };

    return (
        <div className="post-comment-section">
            <div className="post-comment" key={comment.blogId}>
                <Link to={`/user-profile/${comment.userId}`}>
                    <img className="post-comment-profile-pic" src={commentUser?.avatarUrl} />
                </Link>
                <div className="post-comment-inner">
                    <div className="comment-card">
                        <div className="comment-header">
                            <Link to={`/user-profile/${comment.userId}`}>{commentUser?.fullName}</Link>
                            <span>&nbsp;•&nbsp;</span>
                            <p>{formattedTime}</p>
                        </div>
                        <div className="comment-body">
                            {isEditMode ? (
                                <textarea
                                    value={updatedCommentContent}
                                    onChange={(e) => setUpdatedCommentContent(e.target.value)}
                                    cols={2}
                                    maxLength={100}
                                />
                            ) : (
                                comment.commentContent
                            )}
                        </div>
                    </div>
                    <footer>
                        <HeartButtonComment currentComment={comment} />
                        {loginUser?.userID === comment.userId ? (
                            isEditMode ? (
                                <div className="comment-action-button">
                                    <button className="comment-update-button" onClick={handleUpdate}>
                                        Update
                                    </button>
                                    <button className="comment-delete-button" onClick={handleDelete}>
                                        Delete
                                    </button>
                                    <button className="comment-cancel-button" onClick={() => setEditMode(false)}>
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <button className="comment-edit-button" onClick={() => setEditMode(true)}>
                                    Edit
                                </button>
                            )
                        ) : null}
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PostComment;
