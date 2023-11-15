import React, { useEffect, useState } from "react";
import "./edit-blog.css";
import EditBlogTitle from "./EditBlogTitle/edit-blog-title";
import EditBlogTags from "./EditBlogTags/edit-blog-tags";
import EditBlogSubjects from "./EditBlogSubject/edit-blog-subjects";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { blogApi } from "../../config/axios";
import Tag from "../../model/tag";
import Subject from "../../model/subject";
import { useParams } from "react-router";
import Blog from "../../model/blog";

const EditBlog: React.FC = () => {

    const { blogId } = useParams();

    const initialBlog: Blog = {
        blogId: "1",
        blogTitle: "Example Blog",
        blogContent: "This is an example blog content.",
        userId: "user1",
        btag: [],
        like: [],
        uploadDate: Date.now(),
        status: true,
        subject: [],
    };

    const [blog, setBlog] = useState<Blog>(initialBlog);
    const [loading, setLoading] = useState<boolean>(true)

    const fetchBlogData = async () => {
        const response = await blogApi.get(`show/${blogId}`, { withCredentials: true });
        setBlog(response.data);
        setLoading(false)
    };

    useEffect(() => {
        fetchBlogData();
    }, [blogId]);

    const [newBlogTitle, setTitle] = useState(blog.blogTitle);
    const [newBtag, setTags] = useState<Tag[]>(blog.btag);
    const [newSubject, setSubject] = useState<Subject[]>(blog.subject);
    const [newBlogContent, setContent] = useState(blog.blogContent);
    const [validationMessage, setValidationMessage] = useState<string>("");
    const [validationMessageColor, setValidationMessageColor] = useState<string>("");

    useEffect(() => {
        if (blog.blogId) {
            setTitle(blog.blogTitle);
            setTags(blog.btag);
            setSubject(blog.subject);
            setContent(blog.blogContent);
        }
    }, [blog]);

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
        ],
    };

    const HandleUpdate = () => {
        if (
            newBlogTitle?.trim() === "" &&
            newBtag?.length === 0 &&
            newBlogContent?.trim() === ""
        ) {
            setValidationMessage("Title, tags, and content must not be empty.");
            setValidationMessageColor("red");
        } else {
            // Clear any previous error messages
            setValidationMessage("");
            setValidationMessageColor(""); // Clear color

            const NewBlog: Blog = {
                ...blog,
                blogTitle: newBlogTitle,
                blogContent: newBlogContent,
                btag: newBtag,
                subject: newSubject,
            };

            blogApi
                .post(`/update`, NewBlog, { withCredentials: true })
                .then((response) => {
                    console.log("Blog post created:", response.data);
                    setValidationMessage("Post successfully updated");
                    setValidationMessageColor("green");
                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/detail-blog/${blogId}`;
                })
                .catch((error) => {
                    console.log(NewBlog);
                    console.error("Error creating blog post:", error);
                    setValidationMessage("Error updating blog. Please try again.");
                    setValidationMessageColor("red");
                });
        }
    };

    return (
        <div className="create-blog-container">
            <form className="create-post-form">
                <div className="post-content-and-title">
                    <div className="post-top">
                        {!loading && (
                            <>
                                <EditBlogTitle setTitle={setTitle} currentTitle={blog.blogTitle} />
                                <EditBlogTags setTags={setTags} uri="/show" currentTags={blog.btag} />
                                <EditBlogSubjects setSubjects={setSubject} uri="/show" currentSubject={blog.subject} />
                            </>
                        )}
                    </div>
                    <div className="post-body">
                        <ReactQuill
                            value={newBlogContent}
                            onChange={setContent}
                            className="post-body-input-field"
                            modules={modules}
                        />
                    </div>
                    <h1 className="the-big-preview">Preview</h1>
                    <div className="edit-preview">
                        <div className="preview" dangerouslySetInnerHTML={{ __html: newBlogContent }} />
                    </div>
                </div>
                <div className="create-post-form-footer">
                    <button type="button" onClick={HandleUpdate}>Save Changes</button>
                </div>
                {
                    validationMessage && (
                        <div className="error-message" style={{ color: validationMessageColor }}>
                            {validationMessage}
                        </div>
                    )
                }
            </form >
        </div >
    );
};

export default EditBlog;
