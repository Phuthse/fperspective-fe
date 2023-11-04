import CommentButton from '../../home/button/CommentButton/comment-button';
import UpAndDownVoteButtonHorizontal from '../../home/button/ReactionButton/up-down-vote-button-horizontal';
import './user-profile-body-main.css';

type UserProfileBodyMain = {
    UserName: string;
    DatePosted: string;
    PostTitle: string;
    PostTags: string[];
    NumberOfUpvote: number;
    NumberOfComment: number;
}

const UserProfileBodyMain: React.FC<UserProfileBodyMain> =
    ({
        UserName,
        DatePosted,
        PostTitle,
        PostTags,
        NumberOfUpvote,
        NumberOfComment
    }) => {

        return (

            <div className="user-profile-body-main-post">
                <div className="user-profile-body-main-post-top">

                    <img src='https://lh3.googleusercontent.com/a/ACg8ocKQQc9H1q_ksC6VfRl3KJrypNcOuBXEN60tA9WL7EMXEMk=s96-c' />

                    <div className="user-profile-body-main-post-top-detail">
                        <h4>{UserName}</h4>
                        <p>{DatePosted}</p>
                    </div>

                </div>

                <div className="user-profile-body-main-post-body">

                    <div className="user-profile-body-main-post-body-title">
                        <h2>
                            <a href='#'>{PostTitle}</a>
                        </h2>
                    </div>

                    <div className="user-profile-body-main-post-body-tags">
                        {PostTags.map((tag, index) => (
                            <a key={index} href={`#${tag}`} className="user-bookmark-post-tag">
                                #{tag}
                            </a>
                        ))}
                    </div>

                    <div className="user-profile-body-main-post-body-bottom">
                        <UpAndDownVoteButtonHorizontal upvote={NumberOfUpvote} />
                        <CommentButton NumberOfComment={NumberOfComment} />
                    </div>

                </div>
            </div>

        );
    };

export default UserProfileBodyMain;
