import { Route, Routes } from "react-router";
import "./App.css";

import Layout from "./assets/home/layout/Layout";
import HomePage from "./assets/home/home-page";
import UserDashboard from "./assets/Dashboard/UserDashboard/user-dashboard";
import CreateBlog from "./assets/CreateBlog/create-blog";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path='create-blog' element={<CreateBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
