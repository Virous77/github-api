import React from "react";
import "../../../styles/singlepageCss/RepoList.css";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoListData = ({ repo }) => {
  const {
    name,
    description,
    html_url: htmlUrl,
    forks,
    open_issues: openIssues,
    watchers_count: watchersCount,
    stargazers_count: stargazersCount,
  } = repo;

  return (
    <section className="repo-list">
      <div>
        <h4>
          <a href={htmlUrl}>
            <FaLink className="faLink" />
            {name}
          </a>
        </h4>

        <p className="desc">{description}</p>

        <div className="post">
          <div className="data-icons eye">
            <FaEye className="eyes" />
            {watchersCount}
          </div>

          <div className="data-icons star">
            <FaStar className="stars" />
            {stargazersCount}
          </div>

          <div className="data-icons info  ">
            <FaInfo className="infoo" />
            {openIssues}
          </div>

          <div className="data-icons   utensils">
            <FaUtensils className="utensil" />
            {forks}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepoListData;
