import React, { useEffect, useState } from 'react';
import './create.blog.css';
import CreateBlogTitle from './CreateBlogTitle/create-blog-title';
import CreateBlogTags from './CreateBlogTags/create-blog-tags';
import axios from 'axios'; // Import Axios
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog: React.FC = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [content, setContent] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
        ],
    };

    const handlePublish = () => {
        // Create a data object to send to the backend
        const postData = {
            title,
            tags,
            content,
        };

        // Log the postData before sending the request
        console.log('Blog post data to be sent:', postData);

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

    useEffect(() => {
        // Log data whenever title, tags, or content change
        console.log('Current blog data:', { title, tags, content });
    }, [title, tags, content]);

    return (
        <div className="container">
            <form className="create-post-form">
                <div className="post-content-and-title">
                    <div className="post-top">
                        <CreateBlogTitle setTitle={setTitle} />
                        <CreateBlogTags setTags={setTags} />
                    </div>
                    <div className="post-body">
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            className='post-body-input-field'
                            modules={modules}
                        />
                    </div>
                    <div className="preview">
                        {content}
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
