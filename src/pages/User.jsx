import React, { useEffect, useContext } from "react";
import GithubContext from "../store/UserContext";
import { useParams } from "react-router-dom";
import UserData from "../components/users/UserData";
import Repos from "../components/users/repos/Repos";

const User = () => {
  const { userDeatils, user, isLoading, repos, SearchRepos } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    userDeatils(params.login);
    SearchRepos(params.login);
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      <UserData user={user} isLoading={isLoading} />
      <Repos repos={repos} isLoading={isLoading} />
    </div>
  );
};

export default User;
