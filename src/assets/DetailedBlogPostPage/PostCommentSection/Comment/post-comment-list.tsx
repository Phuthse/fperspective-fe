import PostComment from "./post-comment";
import Comment from "../../../../model/comment";
import { useState, useEffect } from "react";
import { commentApi } from "../../../../config/axios";

type TagListProps = {
    uri: string;
};

const CommentList: React.FC<TagListProps> = ({ uri }) => {

    const [comments, setComments] = useState<Comment[]>([]);
    const fetchCommentData = async () => {
        const response = await commentApi.get(uri, { withCredentials: true });
        setComments(response.data);
    };
    useEffect(() => {
        fetchCommentData();
    }, [uri]);

    return (
        <div className="detail-post-comment-list">
            {comments
                .map((comment) => {
                    return <PostComment key={comment.commentId} comment={comment} />;
                })}
        </div>
    );
};

export default CommentList;