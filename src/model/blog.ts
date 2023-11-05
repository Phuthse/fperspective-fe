import tag from "./tag";

type Blog = {
    blogId: string;
    blogTitle: string;
    blogContent: string;
    userId:string;
    btag: tag[];
    like: string[]
    commentId: string[];
    uploadDate: number;
    status: boolean;
}
       
export default Blog;