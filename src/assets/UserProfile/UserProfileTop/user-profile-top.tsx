import "./user-profile-top.css";
import FollowButton from "../../home/button/FollowButton/follow-button";
import User from "../../../model/user";
import { useState, useEffect } from "react";
import { loginApi } from "../../../config/axios";
import { Link } from "react-router-dom";

type UserProfileTopProp = {
  userProfile: User;
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
    const response = await loginApi.get("/currentUser", {
      withCredentials: true,
    });
    setLoginUser(response.data);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const isCurrentUser = loginUser?.userID === userProfile.userID;

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
              <FollowButton />
            )}
          </div>
        </div>

        <div className="user-profile-header-body">
          <div className="user-profile-header-full-name">
            <h1>{userProfile.username}</h1>
          </div>
          <p className="user-profile-header-bio">{userProfile.bio}</p>

          <div className="user-profile-header-detail">
            <span className="user-profile-header-country">
              <svg fill="#000000" width="44" height="40">
                <path d="M26,2c3,0,5.43,3.29,8.09,4.42s6.82.51,8.84,2.65,1.51,6.07,2.65,8.84S50,23,50,26s-3.29,5.43-4.42,8.09-.51,6.82-2.65,8.84-6.07,1.53-8.84,2.65S29,50,26,50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2,29,2,26s3.29-5.43,4.42-8.09.51-6.82,2.65-8.84,6.07-1.53,8.84-2.65S23,2,26,2Zm0,7.58A16.42,16.42,0,1,0,42.42,26h0A16.47,16.47,0,0,0,26,9.58Zm7.62,9.15,1.61,1.52a1.25,1.25,0,0,1,0,1.51L25.08,33.07a2.07,2.07,0,0,1-1.61.7,2.23,2.23,0,0,1-1.61-.7L16.37,27.6a1,1,0,0,1-.1-1.42l.1-.11L18,24.56a1.1,1.1,0,0,1,1.54-.07l.07.07,3.89,4,8.59-9.8A1.1,1.1,0,0,1,33.62,18.73Z" />
              </svg>
              <span>{userProfile.term}</span>
            </span>

            <span className="user-profile-header-country">
              <svg width="24" height="24">
                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span>{userProfile.campus} Campus</span>
            </span>

            <span className="user-profile-header-join">
              <svg width="24" height="24">
                <path d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 012.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.36a4.025 4.025 0 01-.972-2.182l-.022-.253L2 14v-1a3 3 0 012.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 00-.993.883L4 13v.971l.003.147a2 2 0 003.303 1.4c.363-.312.602-.744.674-1.218l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 003.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 003.99 0L20 14v-1a1 1 0 00-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 11-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C15.85 2.002 17 2.5 17 1z"></path>
              </svg>
              <span>
                Joined on&nbsp;<time>{formattedJoinedDate}</time>
              </span>
            </span>

            {/* EXTRA LINK IF WANT TO */}
            {/* <a href="https://github.com/mikhaelesa" target="_blank" rel="noopener me" className="profile-header__meta__item p-1">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ad8cgxp7y7ks8r5exmhwwdivqjpclwpp" className="crayons-icon shrink-0"><title id="ad8cgxp7y7ks8r5exmhwwdivqjpclwpp">github website</title>
                                         <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                                            </svg>

                                                  </a> */}
          </div>
        </div>

        {/* <div className="user-profile-header-work">
                        <strong className="crayons-definition__title">
                            <p>Work</p>
                        </strong>
                        <p>
                            {UserWork}
                        </p>
                    </div> */}
      </header>
    </div>
  );
};

export default UserProfileTop;
