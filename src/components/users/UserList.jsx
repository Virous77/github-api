import React from "react";
import "../../styles/Userlist.css";
import { Link } from "react-router-dom";

const UserList = ({ user: { login, avatar_url } }) => {
  const userName = login.charAt(0).toUpperCase() + login.slice(1);

  return (
    <li className="userList">
      <div className="avatar">
        <img src={avatar_url} alt={login} />
      </div>

      <div className="users-data">
        <h4>{userName}</h4>
        <Link to={`/user/${login}`} className="visit">
          Visit Profile
        </Link>
      </div>
    </li>
  );
};

export default UserList;
