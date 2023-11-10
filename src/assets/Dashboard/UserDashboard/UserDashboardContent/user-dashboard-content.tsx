import React, { useEffect, useState } from "react";
import "./user-dashboard-content.css";
import { useUserDashboard } from "../user-dashboard-context";
import RecentBlogList from "../UserDashBoardRecentPost/recent-post-list";
import UserFollower from "../UserFollower/user-follower";
import UserFollowing from "../UserFollowing/user-following";
import { loginApi } from "../../../../config/axios";


const UserDashoardContent: React.FC = () => {

  const [userId, setLoginUser] = useState<string>("");
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", {
      withCredentials: true,
    });
    setLoginUser(response.data.userID);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const { selectedNavItem } = useUserDashboard();

  const BLOG_URI = `/search/user/${userId}/-1`;
  const FOLLOWING_URI = `/show/user/${userId}`;
  const FOLLOWER_URI = `/show/count/${userId}`;

  return (
    <div className="user-dashboard-content">
      {/* Display user's recent posts */}
      {selectedNavItem === "posts" && (
        <div>
          <h2>Recent Blogs</h2>
          <RecentBlogList uri={BLOG_URI} />
        </div>
      )}

      {/* Display user's followers */}
      {selectedNavItem === "followers" && (
        <div>
          <h2>Followers</h2>
          <UserFollower followingUri={FOLLOWER_URI} />
        </div>
      )}

      {/* Display user's following users */}
      {selectedNavItem === "followingUsers" && (
        <div>
          <h2>Following Users</h2>
          <UserFollowing
            followingUri={FOLLOWING_URI}
          />
        </div>
      )}
    </div>
  );
};

export default UserDashoardContent;
