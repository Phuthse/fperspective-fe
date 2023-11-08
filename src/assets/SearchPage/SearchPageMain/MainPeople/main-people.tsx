
import "./main-people.css";
import FollowButton from "../../../home/button/FollowButton/follow-button";
import User from "../../../../model/user";
import { Link } from "react-router-dom";

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
            <Link to={`/user-profile/${user.userID}`}>
              {user.username}
            </Link>
          </h2>
          <p>{user.bio}</p>
        </div>

      </div>
      <FollowButton />
    </div>
  );
};

export default SearchPageMainPeople;
