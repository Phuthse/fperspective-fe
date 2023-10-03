import React from 'react';
import './detailed-blog-post.css';
import UserProfile from '../../home/blog/UserProfile/user-profile';
import BiggerBlogTitle from '../BiggerBlogTitle/bigger-blog-title';
import BlogTags from '../../home/blog/BlogTags/blog-tags';
import CommentButton from '../../home/button/CommentButton/comment-button';
import BookmarkButton from '../../home/button/BookmarkButton/bookmark-button';
import PostCommentForm from '../PostContent/post-comment-form';

type BlogPostProps = {
    fullName: string;
    timeUpload: string;
    src: string
    blogTitle: string;
    blogTags: string[];
    numberOfComment: number;
}


const DetailedBlogPost: React.FC<BlogPostProps> = ({
    fullName,
    timeUpload,
    src,
    blogTitle,
    blogTags,
    numberOfComment
}) => {

    return (
        <div className="post-container">

            <UserProfile
                name={fullName}
                time={timeUpload}
                src={src}
            />

            <BiggerBlogTitle title={blogTitle} />

            <BlogTags tags={blogTags} />

            <div className="post-details">
                <div className='post-interact'>
                    <CommentButton NumberOfComment={numberOfComment} />
                </div>

                <div className="bookmark-button">
                    <BookmarkButton />
                </div>
            </div>

            <div className="post-content">
                <h3>Past</h3>
                <p>I have had a really long, bumpy relationship with coding. I'm a naturally fast learner, so when I run into something with as many hurdles as coding, I've never had enough grit to make it through. Or at least, that's what I tell myself.</p>
                <p>At the earliest stages of my journey, I had online profiles on chat sites that I customized with HTML and CSS before I even really understood what those were.</p>
                <p>When I was in high school, I traded my Physics courses for Computer Science courses. I got to learn web design and make my own games instead of doing math on paper, what a dream! At the peak of my high school tech career, I used a Logitech webcam and my own API to design something similar to a Ring doorbell before those really got popular. </p>
                <p>Nowadays, I know enough about these technical topics to hold a conversation, but if you actually pressed me about some of them and held my feet to the fire, I probably wouldn't be able to give you solid answers. For my fellow Americans, if you had Spanish classes in high school and haven't spoken the language since, you'll know how I feel: a stuttering, bumbling mess.</p>
            </div>

            <PostCommentForm ProfilePic='src/assets/images/member-1.png'/>

        </div>
    );
};

export default DetailedBlogPost;
