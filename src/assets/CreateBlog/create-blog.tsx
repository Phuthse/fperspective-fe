import React from 'react';
import './create.blog.css'; // Import your CSS file for styling
import CreateBlogTitle from './CreateBlogTitle/create-blog-title';
import CreateBlogTags from './CreateBlogTags/create-blog-tags';


const CreateBlog: React.FC = () => {
    return (
        <>
            <div className="container">

                <form className='create-post-form'>
                    <div className='post-content-and-title'>

                        <div className="post-top">
                            <CreateBlogTitle/>
                            <CreateBlogTags/>
                        </div>

                        <div className="post-body">
                            <textarea placeholder='Your post content here...' />
                        </div>

                    </div>

                    <div className="create-post-form-footer">
                        <button>Publish</button>
                    </div>
                </form>


            </div >
        </>
    );
};

export default CreateBlog;
