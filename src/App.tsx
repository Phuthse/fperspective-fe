import { Route, Routes } from "react-router";
import "./App.css";

import Layout from "./assets/home/layout/Layout";
import HomePage from "./assets/home/home-page";
import UserDashboard from "./assets/Dashboard/UserDashboard/user-dashboard";
import CreateBlog from "./assets/CreateBlog/create-blog";
import LoginForm from "./assets/Login and Register/login-form";
import SignUpForm from "./assets/Login and Register/signup-form";
import ForgotPasswordForm from "./assets/Login and Register/forgot-password";
import UserProfile from "./assets/UserProfile/user-profile";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path='create-blog' element={<CreateBlog />} />d
            <Route path='login' element={<LoginForm />} />
            <Route path='sign-up' element={<SignUpForm />} />
            <Route path='forgot-password' element={<ForgotPasswordForm />} />
            <Route path='user-profile' element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
