import React, { useEffect, useState } from "react";
import "./user-item.css";
import User from "../../../model/user";
import { userApi } from "../../../config/axios";
import UserItem from "./user-item";
import UserListPagekHeader from "../UserListPageHeader/user-page-header";

type BlogPostProps = {
    userUri: string;
};

const UserItemList: React.FC<BlogPostProps> = ({ userUri }) => {

    const [users, setUsers] = useState<User[]>([]);
    const fetchUserData = async () => {
        const response = await userApi.get(userUri, { withCredentials: true });
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [userUri]);

    return (
        <>
            <UserListPagekHeader count={users.length} />
            <div className="user-item-list-container">
                {users.map((user) => {
                    return (
                        <UserItem user={user} />
                    )
                })}
            </div>
        </>
    );

};

export default UserItemList;
