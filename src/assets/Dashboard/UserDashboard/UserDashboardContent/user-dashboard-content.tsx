import React, { useEffect, useState } from "react";
import "./user-dashboard-content.css";
import { useUserDashboard } from "../user-dashboard-context";
import RecentBlogList from "../UserDashBoardRecentPost/recent-post-list";
import UserFollower from "../UserFollower/user-follower";
import UserFollowing from "../UserFollowing/user-following";
import UserFollowingTags from "../UserFollowingTags/user-following-tags";
import { loginApi } from "../../../../config/axios";

const followerExample = {
  followerFullName: [
    "Alivia Johnson",
    "Mike Tyson",
    "Linda Hellgate",
    "Obama Johnson",
  ],
  followerUserName: ["alivia", "michael", "lind4", "man"],
  followerProfileImage: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww&w=1000&q=80",
    "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_42/1261876/damontweedy_alt4_stocksphotography.jpg",
  ],
};


const followingTagsExample = {
  followingTagName: ["Javascript", "C++", "Python", "C#"],
  followingTagDesc: [
    "Web's go-to for dynamic websites and app development.",
    "Powerful language for systems, games, and high-performance software.",
    "Versatile language for web, data, AI, and automation tasks.",
    "Robust for Windows apps, games, and ASP.NET web services.",
  ],
  numberOfPost: [21424, 12312, 12312, 45834],
};

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
          <UserFollower
            FullName={followerExample.followerFullName}
            ProfileImage={followerExample.followerProfileImage}
            UserName={followerExample.followerUserName}
          />
        </div>
      )}

      {/* Display user's following tags */}
      {selectedNavItem === "followingTags" && (
        <div>
          <h2>Following Tags</h2>
          <UserFollowingTags
            TagName={followingTagsExample.followingTagName}
            NumberOfPosts={followingTagsExample.numberOfPost}
            TagDesc={followingTagsExample.followingTagDesc}
          />
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
