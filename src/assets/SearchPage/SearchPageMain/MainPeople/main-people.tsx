
import "./main-people.css";
import FollowButton from "../../../home/button/FollowButton/follow-button";
import User from "../../../../model/user";

type SearchPageMainPeopleProp = {
  user: User;
};

const SearchPageMainPeople: React.FC<SearchPageMainPeopleProp> = ({ user }) => {

  return (
    <div className="search-page-main-people-container">
            <div className="search-page-main-people">
              <a href="#">
                <img
                  src={user.avatarUrl}
                  alt={user.username}
                  referrerPolicy="no-referrer"
                />
              </a>
              <div className="search-page-main-people-detail">
                <h2>
                  <a href="#">{user.username}</a>
                </h2>
                <p>{user.bio}</p>
              </div>
              
            </div>
            <FollowButton />
    </div>
  );
};

export default SearchPageMainPeople;
