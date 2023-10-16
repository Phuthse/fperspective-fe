import './home-page.css'; // Import your CSS file for styling
import SideNav from './SideNavigation/side-nav';
import TrendingTag from './RightSideNav/Trending/trending';
import WhoToFollow from './RightSideNav/WhoToFollow/who-to-follow';
import BlogList from './blog/BlogList/blog-list';

const trendingTags = ["React", "JavaScript", "CSS", 'C++'];
const numberOfPost = [24241, 47723, 5491, 2123];

const recommendedFullName = ['Alivia Johnson', 'Mike Tyson', 'Linda Hellgate'];
const recommendedUserName = ['alivia', 'michael', 'lind4'];
const recommendedProfileImage = ['src/images/member-1.png', 'src/images/member-2.png', 'src/images/member-3.png'];


const HomePage: React.FC = () => {

  
  return (
    <>

      <div className="container">
        <SideNav />

        <div className='main-content'>  
          <BlogList uri={"/show"}/>
        </div>

        {/* Right nav bar (treding tags)*/}
        <div className='right-sidebar'>

          <TrendingTag
            tags={trendingTags}
            numberOfPost={numberOfPost}
          />

          <WhoToFollow
            FullName={recommendedFullName}
            UserName={recommendedUserName}
            ProfileImage={recommendedProfileImage}
          />

        </div >
      </div >
    </>
  );
};

export default HomePage;
