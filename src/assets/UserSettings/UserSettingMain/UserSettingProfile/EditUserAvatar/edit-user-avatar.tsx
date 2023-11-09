import React, { useState } from 'react';
import './edit-user-avatar.css';

interface CreateBlogTitleProps {
    setAvatar: (title: string) => void;
    currentAvatar: string;
}

const EditUserAvatar: React.FC<CreateBlogTitleProps> = ({ setAvatar, currentAvatar }) => {

    const [text, setText] = useState(currentAvatar || ''); // Use default value if blog is null

    const handleTextareaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setText(value);
        setAvatar(value);
    };

    return (
        <>
            <div className="user-setting-profile-avatar-container">
                <label>Profile image</label>
                <div className="user-setting-profile-avatar">
                    <span>
                        <img src={text} referrerPolicy="no-referrer" />
                    </span>
                    <input
                        placeholder='Avatar URL...'
                        value={text}
                        onChange={handleTextareaChange}
                    />
                </div>
            </div>
        </>
    );
}

export default EditUserAvatar;
