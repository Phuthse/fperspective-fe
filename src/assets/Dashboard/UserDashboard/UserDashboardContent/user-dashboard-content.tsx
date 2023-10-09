import React from 'react';
import './user-dashboard-content.css';
import { useUserDashboard } from '../user-dashboard-context';
import RecentPost from '../UserDashBoardRecentPost/recent-post';
import UserFollower from '../UserFollower/user-follower';
import UserFollowing from '../UserFollowing/user-following';
import UserFollowingTags from '../UserFollowingTags/user-following-tags';


const followerExample = {
    followerFullName: [
        'Alivia Johnson',
        'Mike Tyson',
        'Linda Hellgate',
        'Obama Johnson'
    ],
    followerUserName: [
        'alivia',
        'michael',
        'lind4',
        'man'
    ],
    followerProfileImage: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
        'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww&w=1000&q=80',
        'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_42/1261876/damontweedy_alt4_stocksphotography.jpg'
    ],
};

const followingExample = {
    followingFullName: [
        'Real man',
        'Cool guy',
        'Nice dude',
        'Based lad'
    ],
    followingUserName: [
        'r3al',
        'c00l',
        '69420',
        'ihateblack'
    ],
    followingProfileImage: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg',
        'https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905',
        'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MTU5ODE0NzEzODQ1MDU1/morgan-freeman-copy.jpg',
        'https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachadd.jpg'
    ],
};

const followingTagsExample = {
    followingTagName: [
        'Javascript',
        'C++',
        'Python',
        'C#',
    ],
    followingTagImage: [
        'https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png',
        'data:image/png;base64,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',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        'https://www.bairesdev.com/wp-content/uploads/2021/07/Csharp.svg'
    ],
};


// Make these attribute into arrays



const UserDashoardContent: React.FC = () => {

    const { selectedNavItem } = useUserDashboard();

    return (

        <div className="user-dashboard-content">

            {/* Display user's recent posts */}
            {selectedNavItem === 'posts' && (
                <div>
                    <h2>Recent Blogs</h2>
                    <RecentPost
                        blogTitle="Getting Started with React.js"
                        upvote={8541}
                        numberOfComment={10}
                    />
                </div>
            )}

            {/* Display user's followers */}
            {selectedNavItem === 'followers' && (
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
            {selectedNavItem === 'followingTags' && (
                <div>
                    <h2>Following Tags</h2>
                    <UserFollowingTags
                        TagName={followingTagsExample.followingTagName}
                        TagImage={followingTagsExample.followingTagImage}
                    />
                </div>
            )}

            {/* Display user's following users */}
            {selectedNavItem === 'followingUsers' && (
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
            {selectedNavItem === 'hiddenTags' && (
                <div>
                    <h2>Hidden Tags</h2>

                </div>
            )}


        </div>
    );
};

export default UserDashoardContent;
