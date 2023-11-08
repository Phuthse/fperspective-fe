import { Route, Routes } from "react-router";
import "./App.css";

import Layout from "./assets/home/layout/Layout";
import HomePage from "./assets/home/home-page";
import UserDashboard from "./assets/Dashboard/UserDashboard/user-dashboard";
import CreateBlog from "./assets/CreateBlog/create-blog";
import LoginForm from "./assets/Login and Register/login-form";
import UserProfile from "./assets/UserProfile/user-profile";
import UserBookmark from "./assets/UserBookmark/user-bookmark";
import SearchPage from "./assets/SearchPage/search-page";
import NotificationPage from "./assets/NotificationPage/notification-page";
import TagsPage from "./assets/TagsPage/tags-page";
import AdminDashboard from "./assets/Dashboard/AdminDashboard/admin-dashboard";
import UserAnalytic from "./assets/UserAnalytics/user-analytic";
import UserSetting from "./assets/UserSettings/user-setting";
import SubjectPage from "./assets/SubjectsPage/subjects-page";
import DetailedBlogPostPage from "./assets/DetailedBlogPostPage/detail-blog-post-page";
import ApprovePage from "./assets/home/approve-page";
import { BrowserRouter } from "react-router-dom";
import CategoryPage from "./assets/CategoryPage/category-page";
import TagFilteredHomePage from "./assets/home/tag-filtered-home-page";
import SubjectFilteredHomePage from "./assets/home/subject-filtered-home-page";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/:filter" element={<HomePage />} />
            <Route path="/top/:filter" element={<HomePage />} />

            <Route path='/tag/:tagFilter' element={<TagFilteredHomePage />} />
            <Route path='/tag/:tagFilter/:filter' element={<TagFilteredHomePage />} />
            <Route path='/tag/:tagFilter/top/:filter' element={<TagFilteredHomePage />} />

            <Route path='subject/:subjectFilter' element={<SubjectFilteredHomePage />} />
            <Route path='subject/:subjectFilter/:filter' element={<SubjectFilteredHomePage />} />
            <Route path='subject/:subjectFilter/top/:filter' element={<SubjectFilteredHomePage />} />
            
            <Route path="user-dashboard" element={<UserDashboard />} />
            <Route path='create-blog' element={<CreateBlog />} />
            <Route path="user-profile/:userID" element={<UserProfile />} />
            <Route path='bookmark' element={<UserBookmark />} />
            <Route path='search/:searchText' element={<SearchPage />} />
            <Route path='notification' element={<NotificationPage />} />
            <Route path='tag-page' element={<TagsPage />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="user-analytic" element={<UserAnalytic />} />
            <Route path="setting" element={<UserSetting />} />
            <Route path="subject-page" element={<SubjectPage />} />
            <Route path="detail-blog/:blogId" element={<DetailedBlogPostPage />} />
            <Route path='approve' element={<ApprovePage />} />
            <Route path='/category-page' element={<CategoryPage />} />
          </Route>
          <Route path='login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
