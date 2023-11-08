import Category from "./category";
import Subject from "./subject";
import tag from "./tag";

type Blog = {
    blogId: string;
    blogTitle: string;
    blogContent: string;
    userId: string;
    category: Category;
    subject: Subject[];
    btag: tag[];
    like: string[]
    commentId: string[];
    uploadDate: number;
    status: boolean;
}

export default Blog;