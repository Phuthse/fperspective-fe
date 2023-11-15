import React, { useEffect, useState } from "react";
import "./create-blog.css";
import CreateBlogTitle from "./CreateBlogTitle/create-blog-title";
import CreateBlogTags from "./CreateBlogTags/create-blog-tags";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { blogApi, loginApi } from "../../config/axios";
import Tag from "../../model/tag";
import CreateBlogSubjects from "./CreateBlogSubject/create-blog-subjects";
import Subject from "../../model/subject";
import User from "../../model/user";

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

const CreateBlog: React.FC = () => {



    const [userId, setLoginUser] = useState<string>("");
    const [blogTitle, setTitle] = useState("");
    const [btag, setTags] = useState<Tag[]>([]);
    const [subject, setSubject] = useState<Subject[]>([]);
    const [blogContent, setContent] = useState("");
    const [validationMessage, setValidationMessage] = useState<string>("");
    const [validationMessageColor, setValidationMessageColor] = useState<string>("");

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
        ],
    };
    
    const fetchLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setLoginUser(response.data.userID);
        } catch {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    /* REDIRECT TO LOGIN PAGE IF NOT LOGGED IN */
    const [currentLoginUser, setCurrentLoginUser] = useState<User>();
    const fetchCurrentLoginData = async () => {
        try {
            const response = await loginApi.get("/currentUser", { withCredentials: true });
            setCurrentLoginUser(response.data);
        }
        catch {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`
        }
    };
    useEffect(() => {
        fetchCurrentLoginData();
    }, [loginApi]);
    useEffect(() => {
        const delay = setTimeout(() => {
            timeout(200);
            if (currentLoginUser === null || currentLoginUser === undefined) {
                // window.location.reload();
                // window.location.href = 'http://localhost:5173/login';
            }
        }, 700);
        return () => clearTimeout(delay);
    }, [currentLoginUser]);


    const uploadDate = new Date();

    const HandlePublish = () => {
        if (
            blogTitle.trim() === "" ||
            btag.length === 0 ||
            blogContent.trim() === ""
        ) {
            setValidationMessage("Title, tags, and content must not be empty.");
            setValidationMessageColor("red");
        } else {
            // Clear any previous error messages
            setValidationMessage("");
            setValidationMessageColor(""); // Clear color

            const postData = {
                blogTitle,
                btag,
                subject,
                blogContent,
                userId,
                uploadDate,
            };

            blogApi
                .post(`/show`, postData, { withCredentials: true })
                .then((response) => {
                    console.log("Blog post created:", response.data);
                    setValidationMessage("Post successfully created");
                    setValidationMessageColor("green");
                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
                })
                .catch((error) => {
                    console.log(postData);
                    console.error("Error creating blog post:", error);
                    setValidationMessage("Error creating blog post. Please try again.");
                    setValidationMessageColor("red");
                });
        }
    };

    return (
        <div className="create-blog-container">
            <form className="create-post-form">
                <div className="post-content-and-title">
                    <div className="post-top">
                        <CreateBlogTitle setTitle={setTitle} />
                        <CreateBlogTags setTags={setTags} uri="/show" />
                        <CreateBlogSubjects setSubjects={setSubject} uri="/show" />
                    </div>
                    <div className="post-body">
                        <ReactQuill
                            value={blogContent}
                            onChange={setContent}
                            className="post-body-input-field"
                            modules={modules}
                        />
                    </div>
                    <h1 className="the-big-preview">Preview</h1>
                    <div className="preview-container">
                        <div className="preview" dangerouslySetInnerHTML={{ __html: blogContent }} />
                    </div>
                </div>
                <div className="create-post-form-footer">
                    <button type="button" onClick={HandlePublish}>Publish</button>
                </div>
                {validationMessage && (
                    <div className="error-message" style={{ color: validationMessageColor }}>
                        {validationMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreateBlog;
