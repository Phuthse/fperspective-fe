import React, { useState, useRef } from 'react';
import './create-blog-title.css';

interface CreateBlogTitleProps {
  setTitle: (title: string) => void;
}

function CreateBlogTitle({ setTitle }: CreateBlogTitleProps) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
    setTitle(value); // Call the setTitle function passed as a prop

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
        placeholder="Your post title here..."
        style={{ minHeight: '80px' }} // Set your initial minimum height here
      />
    </div>
  );
}

export default CreateBlogTitle;
