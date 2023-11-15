import React from "react";
import "./user-item.css";
import User from "../../../model/user";
import { Link } from "react-router-dom";

type BlogPostProps = {
    user: User;
};

const UserItem: React.FC<BlogPostProps> = ({ user }) => {

    const JoinedDate = new Date(user.createdDate);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: '2-digit' };
    const formattedJoinedDate = JoinedDate.toLocaleString('vn-VN', options);

    const campusNames: { [key: string]: string } = {
        HCM: "Ho Chi Minh",
        DN: "Da Nang",
        CT: "Can Tho",
        HL: "Hoa Lac",
        HN: "Ha Noi",
        QN: "Quy Nhon",
    };
    const campusName = campusNames[user.campus] || user.campus;


    return (
        <>
            <div className="user-item">
                <div className='user-item-name'>
                    <Link to={`/user-profile/${user.userID}`}>
                        <img src={user.avatarUrl} />
                        <div className='user-item-profile-name'>
                            <p>{user.fullName}</p>
                            <p>@{user.username}</p>
                        </div>
                    </Link>
                    <div className='user-item-delete-button'>
                        <button>Disable</button>
                    </div>
                </div>
                <div className="user-item-bio">
                    <p>{user.bio}</p>
                    <div className="user-item-details">
                        <ul className="user-item-details-inner">
                            <li>
                                <div className="key">
                                    Campus
                                </div>
                                <div className="value">
                                    {campusName}
                                </div>
                            </li>
                            <li>
                                <div className="key">
                                    Term
                                </div>
                                <div className="value">
                                    {user.term}
                                </div>
                            </li>
                            <li>
                                <div className="key">
                                    Joined
                                </div>
                                <div className="value">
                                    <time dateTime="2019-06-29T09:14:12Z" className="date">{formattedJoinedDate}</time>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

};

export default UserItem;
