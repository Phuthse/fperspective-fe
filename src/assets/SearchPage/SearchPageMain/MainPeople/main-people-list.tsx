import { useState, useEffect } from "react";
import { loginApi, userApi } from "../../../../config/axios";
import User from "../../../../model/user";
import SearchPageMainPeople from "./main-people";

type MainPeopleListProp = {
  uri: string;
};

const MainPeopleList: React.FC<MainPeopleListProp> = ({ uri }) => {

  const [loginUser, setLoginUser] = useState<string>();
  const [loading, setLoading] = useState(true)
  const fetchLoginData = async () => {
    const response = await loginApi.get("/currentUser", { withCredentials: true });
    setLoginUser(response.data.userID);
  };
  useEffect(() => {
    fetchLoginData();
  }, [loginApi]);

  const [users, setUsers] = useState<User[]>([]);
  const fetchUserData = async () => {
    const response = await userApi.get(uri, { withCredentials: true });
    setUsers(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchUserData();
  }, [uri]);

  if (users.length === 0) {
    return (
      <section style={{ color: "white" }}>
        <h1
          style={{ padding: '15px' }}
        >No users found</h1>
      </section>
    );
  }

  if (!loading) {
    return (
      <>
        {users
          .filter((user) => user.userID != loginUser)
          .map((filteredUser) => {
            return <SearchPageMainPeople user={filteredUser} />;
          })}
      </>
    );
  }
};

export default MainPeopleList;
