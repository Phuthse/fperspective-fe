import React from 'react';
import './user-following-tags.css';

type UserFollowingTagsProps = {
    TagName: string[];
    NumberOfPosts: number[];
    TagDesc: string[];
}

const UserFollowingTags: React.FC<UserFollowingTagsProps> = ({ TagName, NumberOfPosts, TagDesc }) => {
    return (
        <div className='user-following-tags-container'>
            {TagName.map((tagName, index) => (
                <div className='user-following-tags'>
                    <div className='following-tag-name'>
                        <h4>
                            <a href='#'><span>#</span>{tagName}</a>
                        </h4>
                        <div>{NumberOfPosts[index]} posts</div>
                    </div>
                    <p className="following-tag-des">{TagDesc[index]}</p>
                    <div className="dashboard-tag-buttons-container">
                        {/* <FollowButton /> */}
                    </div>
                </div>
            ))}
        </div>

    );
};
export default UserFollowingTags;
