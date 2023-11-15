import React, { useState } from 'react';
import './edit-user-bio.css';

interface CreateBlogTitleProps {
    setBio: (bio: string) => void;
    currentBio: string;
}

const EditUserBio: React.FC<CreateBlogTitleProps> = ({ setBio, currentBio }) => {

    const [text, setText] = useState(currentBio || ''); // Use default value if bio is null
    const [charCount, setCharCount] = useState(text.length);

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setText(value);
        setBio(value);

        const newCharCount = value.length;
        setCharCount(newCharCount);
    };

    return (
        <>
            <div className="user-setting-profile-bio">
                <label>Bio</label>
                <div className="bio-input-container">
                    <textarea
                        placeholder="Something about yourself..."
                        maxLength={200} // Assuming you want to limit by characters
                        value={text}
                        onChange={handleTextareaChange}
                    />
                    <div className="bio-word-counter">
                        {charCount}/{200}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditUserBio;
