import React, { useEffect, useState } from "react";
import "./user-setting-profile.css";
import { loginApi, userApi } from "../../../../config/axios";
import User from "../../../../model/user";
import EditUserName from "./EditUserName/edit-user-name";
import EditUserBio from "./EditUserBio/edit-user-bio";
import EditUserAvatar from "./EditUserAvatar/edit-user-avatar";

const UserSettingProfile: React.FC = () => {
  const initialUser: User = {
    userID: "1",
    username: "Loading...",
    bio: "Loading...",
    email: "Loading...",
    avatarUrl: "Loading...",
    campus: "Loading...",
    term: "Loading...",
    category: "Loading...",
    fullName: "Loading...",
    createdDate: 2,
    status: false,
    role: "",
    loginProvider: "",
    name: "",
  };

  const [loginUser, setLoginUser] = useState<User>(initialUser);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", {
      withCredentials: true,
    });
    setLoginUser(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const [newUserName, setUserName] = useState(loginUser.username);
  const [newBio, setBio] = useState(loginUser.bio);
  const [newAvatar, setAvatar] = useState(loginUser.avatarUrl);

  useEffect(() => {
    if (loginUser) {
      setUserName(loginUser.username);
      setBio(loginUser.bio);
      setAvatar(loginUser.avatarUrl);
    }
  }, [loginUser]);

  const HandleUpdate = () => {
    const NewUser: User = {
      ...loginUser,
      username: newUserName,
      bio: newBio,
      avatarUrl: newAvatar,
    };

    userApi
      .post(`/update`, NewUser, { withCredentials: true })
      .then((response) => {
        console.log("Blog post created:", response.data);
        window.location.href = `${
          import.meta.env.VITE_FRONTEND_URL
        }/user-profile/${loginUser.userID}`;
      })
      .catch((error) => {
        console.log(NewUser);
        console.error("Error updating profile:", error);
      });
  };

  console.log("USER NAME: " + newUserName);
  console.log("BIO: " + newBio);
  console.log("AVATAR: " + newAvatar);

  return (
    <>
      {!loading && (
        <div className="user-setting-profile-container">
          <h2>User</h2>
          <EditUserName
            setUserName={setUserName}
            currentUserName={loginUser.username}
          />
          <EditUserBio setBio={setBio} currentBio={loginUser.bio} />
          <EditUserAvatar
            setAvatar={setAvatar}
            currentAvatar={loginUser.avatarUrl}
          />
          <div className="user-setting-profile-save">
            <button onClick={HandleUpdate}>Update profile</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserSettingProfile;
