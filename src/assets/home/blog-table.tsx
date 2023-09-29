import React from 'react';
import BlogPost from './blog-post'; // Import the BlogPost component

// Sample data for blog posts (you can replace this with your actual data)
const blogPosts = [
  {
    id: 1,
    avatar: 'avatar1.jpg',
    name: 'John Doe',
    username: 'johndoe123',
    title: 'A Wonderful Blog Post',
    image: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww&w=1000&q=80',
    upvotes: 10,
    downvotes: 2,
  },
  {
    id: 2,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    name: 'Jane Smith',
    username: 'janesmith456',
    title: 'My Travel Adventure',
    image: 'post2.jpg',
    upvotes: 15,
    downvotes: 3,
  },
  // Add more blog posts as needed
];

const BlogTable: React.FC = () => {
  return (
    <div className="blog-table">
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          avatar={post.avatar}
          name={post.name}
          username={post.username}
          title={post.title}
          image={post.image}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
        />
      ))}
    </div>
  );
};

export default BlogTable;
