import React, { Fragment } from "react";
import "../../../styles/singlepageCss/UserProfilez.css";

const UserProfile2 = ({ user }) => {
  const { twitter_username: twitter, html_url: htmlUrl, blog, location } = user;

  return (
    <Fragment>
      <div className="visits">
        <a
          href={htmlUrl}
          target="_blank"
          rel="norefrrer"
          className="visit-link"
        >
          Visit Github Profile
        </a>
      </div>

      <div className="user-links">
        <div className={location ? "location" : ""}>
          {location && (
            <div className="location-info">
              <div className="locationExist">Location</div>
              <p className="location-info">{location}</p>
            </div>
          )}
        </div>

        <div className={blog ? "blog" : ""}>
          {blog && (
            <div className="ebsite-info">
              <div className="Website">Website</div>
              <a href={`${blog} `} target="_blank" rel="noreferrer">
                {blog}
              </a>
            </div>
          )}
        </div>

        <div className={twitter ? "twitter" : ""}>
          {twitter && (
            <div className="twitter-info">
              <div className="twitters">Twitter</div>
              <a
                href={`https://twitter.com/${twitter} `}
                target="_blank"
                rel="noreferrer"
              >
                {twitter}
              </a>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile2;
