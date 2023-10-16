import tag from "./tag";

type Blog = {
    blogID: string;
    blogTitle: string;
    blogContent: string;
    userId:string;
    btag: tag[];
    like: string[]
    commentId: string[];
    uploadDate: string;
    status: boolean;
}
       
export default Blog;