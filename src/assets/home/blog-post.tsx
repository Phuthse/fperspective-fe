import React from 'react';

interface BlogPostProps {
  avatar: string; // URL for the avatar image
  name: string; // User's name
  username: string; // User's username
  title: string; // Post title
  image: string; // URL for the post image on the internet
  upvotes: number; // Number of upvotes
  downvotes: number; // Number of downvotes
}

const BlogPost: React.FC<BlogPostProps> = ({
  avatar,
  name,
  username,
  title,
  image,
  upvotes,
  downvotes,
}) => {
  return (
    <div className="blog-post">
      <div className="user-info">
        <img src={avatar} alt={`Avatar for ${name}`} className="avatar" />
        <div className="user-details">
          <h3>{name}</h3>
          <p>@{username}</p>
        </div>
      </div>
      <h2 className="post-title">{title}</h2>
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`Image for ${title}`} className="post-image" />
      </a>
      <div className="vote-buttons">
        <button className="upvote-button">Upvote</button>
        <span className="vote-count">{upvotes - downvotes}</span>
        <button className="downvote-button">Downvote</button>
      </div>
    </div>
  );
};

export default BlogPost;
