import React, { useEffect, useState } from "react";
import "./user-profile-top.css";
import User from "../../../model/user";
import { loginApi } from "../../../config/axios";
import { Link } from "react-router-dom";
import UserFollowButton from "../../home/button/FollowButton/follow-button";

type UserProfileTopProp = {
  userProfile: User;
};

const campusNames: { [key: string]: string } = {
  HCM: "Ho Chi Minh",
  DN: "Da Nang",
  CT: "Can Tho",
  HL: "Hoa Lac",
  HN: "Ha Noi",
  QN: "Quy Nhon",
};

const UserProfileTop: React.FC<UserProfileTopProp> = ({ userProfile }) => {
  const JoinedDate = new Date(userProfile.createdDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  const formattedJoinedDate = JoinedDate.toLocaleString("en-US", options);

  const [loginUser, setLoginUser] = useState<User>();
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", { withCredentials: true });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const isCurrentUser = loginUser?.userID === userProfile.userID;

  const campusName = campusNames[userProfile.campus] || userProfile.campus;

  return (
    <div className="user-profile-header-container">
      <header className="user-profile-header">
        <div className="user-profile-header-top">
          <span className="user-profile-avatar">
            <img src={userProfile.avatarUrl} referrerPolicy="no-referrer" />
          </span>
          <div className="user-profile-header-action">
            {isCurrentUser ? (
              <Link to="/setting">Edit Profile</Link>
            ) : (
              <UserFollowButton followUser={userProfile} />
            )}
          </div>
        </div>

        <div className="user-profile-header-body">
          <div className="user-profile-header-full-name">
            <h1>{userProfile.fullName}</h1>
            <p>@{userProfile.username}</p>
          </div>
          <p className="user-profile-header-bio">{userProfile.bio}</p>

          <div className="user-profile-header-detail">

            <span className="user-profile-header-detail-item">
              <svg width="35px" height="35px" viewBox="0 0 100 100">
                <path d="M50,20c3.79,0,6.79,4.11,10.11,5.53s8.52.63,11,3.31,1.89,7.58,3.31,11.05S80,46.21,80,50s-4.11,6.79-5.53,10.11-.63,8.52-3.31,11c-2.53,2.52-7.58,1.89-11,3.31S53.79,80,50,80s-6.79-4.11-10.11-5.53-8.52-.63-11-3.31c-2.52-2.53-1.89-7.58-3.31-11S20,53.79,20,50s4.11-6.79,5.53-10.11-.63-8.52-3.31-11S36.42,27,39.89,25.53,46.21,20,50,20Zm0,9.47A20.53,20.53,0,1,0,70.53,50,20.59,20.59,0,0,0,50,29.47Zm9.52,11.44,2,1.9a1.55,1.55,0,0,1,0,1.89L48.78,58.84a2.55,2.55,0,0,1-2,.88,2.76,2.76,0,0,1-2-.88L37.9,52a1.26,1.26,0,0,1,0-1.89l2-1.9a1.37,1.37,0,0,1,2,0l4.87,5L57.52,40.91A1.37,1.37,0,0,1,59.52,40.91Z" />
              </svg>
              <span>{userProfile.term}</span>
            </span>

            <span className="user-profile-header-detail-item">
              <svg width="24" height="24">
                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span>{campusName}</span>
            </span>

            <span className="user-profile-header-detail-item">
              <svg width="24px" height="24px">
                <path d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z" fill="#5C5F62" />
              </svg>
              <span>
                <span>{userProfile.category.split(' ').map(word => word.charAt(0)).join('')}</span>
              </span>
            </span>

            <span className="user-profile-header-detail-item">
              <svg width="24" height="24">
                <path d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 012.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.36a4.025 4.025 0 01-.972-2.182l-.022-.253L2 14v-1a3 3 0 012.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 00-.993.883L4 13v.971l.003.147a2 2 0 003.303 1.4c.363-.312.602-.744.674-1.218l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 003.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012-.282a2 2 0 003.99 0L20 14v-1a1 1 0 00-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 11-2.898-.776C5.85 2.002 7 2.5 7 1zm5 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C10.85 2.002 12 2.5 12 1zm5 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C15.85 2.002 17 2.5 17 1z"></path>
              </svg>
              <span>
                Joined on&nbsp;<time>{formattedJoinedDate}</time>
              </span>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserProfileTop;
