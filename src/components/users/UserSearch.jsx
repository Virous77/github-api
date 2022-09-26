import React, { useState, useContext } from "react";
import "../../styles/UserSearch.css";
import GithubContext from "../../store/UserContext";
import AlertContext from "../../store/AlertContext";

const UserSearch = () => {
  const [search, setSearch] = useState("");

  //Context
  const { users, SearchUsers, clearSearch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  //Onchange
  const enterInputHandler = (e) => {
    setSearch(e.target.value);
  };

  //Submit
  const submitSearchHandler = (e) => {
    e.preventDefault();

    if (search === "") {
      setAlert("Please enter something..", "error");
    } else {
      SearchUsers(search);
    }

    setSearch("");
  };

  //Clear Search
  const clearSearchHandler = () => {
    clearSearch();
  };

  return (
    <section className="search-bar">
      <form onSubmit={submitSearchHandler}>
        <div className="search">
          <input
            type="text"
            placeholder="search users..."
            value={search}
            onChange={enterInputHandler}
          />
          <button>Go</button>
        </div>
      </form>

      {users.length > 0 && (
        <div className="clear">
          <button type="button" onClick={clearSearchHandler}>
            Clear
          </button>
        </div>
      )}
    </section>
  );
};

export default UserSearch;
