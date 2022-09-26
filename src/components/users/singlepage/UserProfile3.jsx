import React, { Fragment } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import "../../../styles/singlepageCss/UserProfile3.css";

const UserProfile3 = ({ user }) => {
  const {
    followers,
    following,
    public_repos: repos,
    public_gists: status,
  } = user;

  return (
    <Fragment>
      <div className="followers">
        <div>
          <span>Followers</span>
          <p className="followers-count">{followers}</p>
        </div>
        <FaUsers className="followers-icon" />
      </div>

      <div className="following">
        <div>
          <span>Following</span>
          <p className="following-count">{following}</p>
        </div>
        <FaUserFriends className="following-icon" />
      </div>

      <div className="repos">
        <div>
          <span>Public Repos</span>
          <p className="following-count">{repos}</p>
        </div>
        <FaCodepen className="following-icon" />
      </div>

      <div className="gists">
        <div>
          <span>Public Gists</span>
          <p className="following-count">{status}</p>
        </div>
        <FaStore className="following-icon" />
      </div>
    </Fragment>
  );
};

export default UserProfile3;
