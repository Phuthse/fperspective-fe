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

const followingExample = {
  followingFullName: ["Real man", "Cool guy", "Nice dude", "Based lad"],
  followingUserName: ["r3al", "c00l", "69420", "ihateblack"],
  followingProfileImage: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
    "https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905",
    "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MTU5ODE0NzEzODQ1MDU1/morgan-freeman-copy.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachadd.jpg",
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
            FullName={followingExample.followingFullName}
            ProfileImage={followingExample.followingProfileImage}
            UserName={followerExample.followerUserName}
          />
        </div>
      )}

      {/* Display user's hidden tags */}
      {selectedNavItem === "hiddenTags" && (
        <div>
          <h2>Hidden Tags</h2>
        </div>
      )}

      {/* Display user's analytics */}
      {selectedNavItem === "analytic" && (
        <div>
          <h2>Analytic</h2>
        </div>
      )}
    </div>
  );
};

export default UserDashoardContent;
