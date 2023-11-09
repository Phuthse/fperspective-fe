import React, { useState, useRef } from 'react';
import './edit-blog-title.css';

interface CreateBlogTitleProps {
  setTitle: (title: string) => void;
  currentTitle: string;
}

const EditBlogTitle: React.FC<CreateBlogTitleProps> = ({ setTitle, currentTitle }) => {

  const [text, setText] = useState(currentTitle || ''); // Use default value if blog is null
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
        style={{ minHeight: '80px' }}
      />
    </div>
  );
}

export default EditBlogTitle;
