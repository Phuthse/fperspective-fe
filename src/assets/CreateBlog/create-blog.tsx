import React, { useEffect, useState } from "react";
import "./create.blog.css";
import CreateBlogTitle from "./CreateBlogTitle/create-blog-title";
import CreateBlogTags from "./CreateBlogTags/create-blog-tags";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { blogApi, loginApi } from "../../config/axios";
import Tag from "../../model/tag";

const CreateBlog: React.FC = () => {
    const [blogTitle, setTitle] = useState("");
    const [btag, setTags] = useState<Tag[]>([]);
    const [blogContent, setContent] = useState("");

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
        ],
    };

    const [userId, setLoginUser] = useState<string>("");
    const fetchLoginData = async () => {
        const response = await loginApi.get("/currentUser", {
            withCredentials: true,
        });
        setLoginUser(response.data.userID);
    };

    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    const uploadDate = new Date();

    const handlePublish = () => {
        // Create a data object to send to the backend
        const postData = {
            blogTitle,
            btag,
            blogContent,
            userId,
            uploadDate,
        };

        // Send a POST request to your backend
        blogApi
            .post(`/show`, postData, { withCredentials: true })
            .then((response) => {
                console.log(postData);
                // Handle success, e.g., show a success message or redirect
                window.location.href = "http://localhost:5173";
                console.log("Blog post created:", response.data);
            })
            .catch((error) => {
                console.log(postData);
                // Handle errors
                console.error("Error creating blog post:", error);
            });

    };

    return (
        <div className="container">
            <form className="create-post-form">
                <div className="post-content-and-title">
                    <div className="post-top">
                        <CreateBlogTitle setTitle={setTitle} />
                        <CreateBlogTags setTags={setTags} uri="/show" />
                    </div>
                    <div className="post-body">
                        <ReactQuill
                            value={blogContent}
                            onChange={setContent}
                            className="post-body-input-field"
                            modules={modules}
                        />
                    </div>
                    <div className="preview">
                        <div dangerouslySetInnerHTML={{ __html: blogContent }} />
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