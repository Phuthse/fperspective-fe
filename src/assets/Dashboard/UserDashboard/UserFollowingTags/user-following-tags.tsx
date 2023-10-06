import React from 'react';
import './user-following-tags.css';

type UserFollowingTagsProps = {
    TagName: string[];
    TagImage: string[];
}

const UserFollowingTags: React.FC<UserFollowingTagsProps> = ({ TagName, TagImage }) => {
    return (
        <div className='user-following-tags-container'>
            {TagName.map((tagName, index) => (
                <div className="user-following-tags">
                    <a href="#">
                        <img src={TagImage[index]} alt={`Profile of ${tagName}`} />
                    </a>

                    <div className="profile-name">
                        <h3>
                            <a href="#">
                                {tagName}
                            </a>
                        </h3>
                    </div>
                </div>
            ))}

        </div>

    );
};
export default UserFollowingTags;
