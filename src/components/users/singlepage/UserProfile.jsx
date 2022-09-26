import React from "react";
import "../../../styles/singlepageCss/UserProfile.css";
import UserProfile2 from "./UserProfile2";

const UserProfile = ({ user }) => {
  const { name, type, avatar_url: avatar, bio, hireabe, login } = user;

  return (
    <section className="user-data">
      <div className="profile">
        <div className="avatar-bar">
          <img src={avatar} alt={name} className="avatar" />
        </div>

        <div className="overlay"></div>

        <div className="user">
          <h3>{name}</h3>
          <p>{login}</p>
        </div>
      </div>

      <div className="user-wrap">
        <div className="userName">
          <h1>{name}</h1>
          <div className="type">{type}</div>
          <div className={hireabe ? "hire" : ""}>
            {hireabe && <p>Hireable</p>}
          </div>
        </div>

        <div className="bio">{bio}</div>
        <div>
          <UserProfile2 user={user} />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
