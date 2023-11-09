import React, { useEffect, useState } from "react";
import "./user-setting-profile.css";
import { loginApi } from "../../../../config/axios";
import User from "../../../../model/user";

const UserSettingProfile: React.FC = () => {

  const [loginUser, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", {
      withCredentials: true,
    });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  return (
    <>
      <div className="user-setting-profile-container">
        <h2>User</h2>

        <div className="user-setting-profile-username">
          <label>Username</label>
          <input maxLength={30} placeholder={loginUser?.username} size={30} type="text" />
        </div>

        <div className="user-setting-profile-bio">
          <label>Bio</label>
          <textarea placeholder="Something about yourself..." />
        </div>

        <div className="user-setting-profile-avatar-container">
          <label>Profile image</label>

          <div className="user-setting-profile-avatar">
            <span>
              <img src={loginUser?.avatarUrl} referrerPolicy="no-referrer"/>
            </span>
            <input accept="image/*" type="file" />
          </div>
        </div>

        <div className="user-setting-profile-save">
          <button type="submit">Update profile</button>
        </div>
      </div>
    </>
  );
};

export default UserSettingProfile;
