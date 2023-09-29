import React from 'react';
import Layout from './navigation/layout.tsx';
import BlogTable from './blog-table';
import './home-page.css'; // Import your CSS file for styling

const HomePage: React.FC = () => {
  return (
    <Layout>
      <BlogTable />
    </Layout>
  );
};

export default HomePage;
