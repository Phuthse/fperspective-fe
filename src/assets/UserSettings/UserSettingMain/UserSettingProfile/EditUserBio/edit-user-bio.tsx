import React, { useState } from 'react';
import './edit-user-bio.css';

interface CreateBlogTitleProps {
    setBio: (title: string) => void;
    currentBio: string;
}

const EditUserBio: React.FC<CreateBlogTitleProps> = ({ setBio, currentBio }) => {

    const [text, setText] = useState(currentBio || ''); // Use default value if blog is null

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setText(value);
        setBio(value);
    };

    return (
        <>
            <div className="user-setting-profile-bio">
                <label>Bio</label>
                <textarea
                    placeholder="Something about yourself..."
                    maxLength={200}
                    value={text}
                    onChange={handleTextareaChange}
                />
            </div>
        </>
    );
}

export default EditUserBio;
