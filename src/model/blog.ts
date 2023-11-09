import Subject from "./subject";
import tag from "./tag";

type Blog = {
    blogId: string;
    blogTitle: string;
    blogContent: string;
    userId: string;
    subject: Subject[];
    btag: tag[];
    like: string[]
    uploadDate: number;
    status: boolean;
}

export default Blog;