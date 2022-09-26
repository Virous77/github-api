import RepoList from "./RepoList";

const Repos = ({ repos, isLoading }) => {
  return <RepoList repos={repos} isLoading={isLoading} />;
};

export default Repos;
