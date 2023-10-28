import React, { useState } from 'react';
import './create.blog.css';
import CreateBlogTitle from './CreateBlogTitle/create-blog-title';
import CreateBlogTags from './CreateBlogTags/create-blog-tags';
import axios from 'axios'; // Import Axios

const CreateBlog: React.FC = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [content, setContent] = useState('');

    const handlePublish = () => {
        // Create a data object to send to the backend
        const postData = {
            title,
            tags,
            content,
        };

        // Send a POST request to your backend
        axios.post('/api/blog', postData)
            .then((response) => {
                // Handle success, e.g., show a success message or redirect
                console.log('Blog post created:', response.data);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error creating blog post:', error);
            });
    };

    return (
        <div className="container">
            <form className="create-post-form">
                <div className="post-content-and-title">
                    <div className="post-top">
                        <CreateBlogTitle setTitle={setTitle} />
                        <CreateBlogTags setTags={setTags} />
                    </div>
                    <div className="post-body">
                        <textarea
                            placeholder="Your post content here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </div>
                <div className="create-post-form-footer">
                    <button onClick={handlePublish}>Publish</button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
