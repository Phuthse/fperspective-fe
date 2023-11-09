import React, { useState } from 'react';
import './edit-user-name.css';

interface CreateBlogTitleProps {
    setUserName: (title: string) => void;
    currentUserName: string;
}

const EditUserName: React.FC<CreateBlogTitleProps> = ({ setUserName, currentUserName }) => {

    const [text, setText] = useState(currentUserName || ''); // Use default value if blog is null

    const handleTextareaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setText(value);
        setUserName(value); // Call the setTitle function passed as a prop
    };

    return (
        <>
            <div className="user-setting-profile-username">
                <label>Username</label>
                <input
                    maxLength={10}
                    size={10}
                    placeholder='Enter user name...'
                    value={text}
                    onChange={handleTextareaChange}
                />
            </div>
        </>
    );
}

export default EditUserName;
