import React, { useState, useRef } from 'react';
import './create-blog-title.css'

function CreateBlogTitle() {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);

    // Calculate the new minimum height based on the textarea's scrollHeight
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="post-title">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextareaChange}
        placeholder='Your post title here...'
        style={{ minHeight: '80px' }} // Set your initial minimum height here
      />
    </div>
  );
}

export default CreateBlogTitle;
