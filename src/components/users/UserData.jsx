import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Loader from "../../UI/Loader";
import "../../styles/UserData.css";
import UserProfile from "./singlepage/UserProfile";
import UserProfile3 from "./singlepage/UserProfile3";

const UserData = ({ user, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="back-home">
        <Link to="/">← Home</Link>
      </div>
      <main className="okay">
        <UserProfile user={user} />
        <div className="followIt">
          <UserProfile3 user={user} />
        </div>
      </main>
    </Fragment>
  );
};

export default UserData;
