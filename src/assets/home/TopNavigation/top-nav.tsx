import React, { useEffect, useState } from "react";
import "./top-nav.css";
import { Link } from "react-router-dom";
import { loginApi } from "../../../config/axios";
import User from "../../../model/user";

type TopNavProps = {
  uri: string;
}

function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay));
}



const HandleLogout = async () => {
  try {
    window.location.href = "http://localhost:8080/logout"
    await timeout(20);
  } catch { /* empty */ }
  finally {
    window.location.href = "http://localhost:5173/login"
  }
}

const TopNav: React.FC<TopNavProps> = ({ uri }) => {

  const [loginUser, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    const response = await loginApi.get(uri, { withCredentials: true });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const[searchText, setSearchText] = useState<string>(' ');

  const handleSearchTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link to="/">
          <img
            src="https://media.discordapp.net/attachments/599068838151061544/1169593522853249124/f_grey.png?ex=6555f7d9&is=654382d9&hm=c7744635b2c35004d4e95e737f91a750818b504a1da277611b7521f37c8d99dd&=&width=150&height=166"
            className="logo"
          />
        </Link>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <Link to={`/search/${searchText}`}>
            <button type="submit" className="top-nav-search-button">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                </path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <div className="create-blog-button">
          <Link to='/create-blog'>Write a Blog</Link>
        </div>
        <Link to='/notification'>
          <svg fill="white" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
          </svg>
        </Link>
        <div className='nav-user-icon'>
          <img src={loginUser?.avatarUrl} />
          <div className="dropdown-content">
            <Link to={`/user-profile/${loginUser?.userID}`}>
              {loginUser?.username}
            </Link>
            <hr />
            <Link to='/create-blog'>Write a Blog</Link>
            <Link to="/user-dashboard">Dashboard</Link>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
            {loginUser?.role === 'ROLE_ADMIN' && (
              <Link to='admin-create-page'>Admin Create Page</Link>
            )}
            <Link to='/setting'>Setting</Link>
            <Link onClick={HandleLogout} to={""}>Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
