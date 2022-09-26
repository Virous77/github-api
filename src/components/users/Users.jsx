import React, { useContext } from "react";
import Loader from "../../UI/Loader";
import UserList from "./UserList";
import "../../styles/Userlist.css";
import GithubContext from "../../store/UserContext";

const Users = () => {
  const { users, isLoading } = useContext(GithubContext);

  return (
    <section className="users">
      {isLoading && <Loader />}
      {users.map((user) => (
        <UserList key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
