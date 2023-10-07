import { Route, Routes } from "react-router";
import "./App.css";
//import HomePage from './assets/home/home-page'
//import DetailedBlogPostPage from './assets/DetailedBlogPostPage/detail-blog-post-page'
//import LoginForm from './login-form'

import Layout from "./assets/home/layout/Layout";
import HomePage from "./assets/home/home-page";
import UserDashboard from "./assets/Dashboard/UserDashboard/user-dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
