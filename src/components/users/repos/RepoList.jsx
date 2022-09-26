import React from "react";
import Loader from "../../../UI/Loader";
import RepoListData from "./RepoListData";
import "../../../styles/singlepageCss/RepoList.css";

const RepoList = ({ repos, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <h2 className="repo-title">Latest Repositories</h2>
      </div>
      {repos.map((repo) => (
        <RepoListData key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
