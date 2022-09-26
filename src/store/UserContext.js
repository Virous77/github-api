import { createContext, useReducer, useState } from "react";
import UsersReducer from "./UsersReducer";

///Context
const GithubContext = createContext();

// //API DATA
// const GITHUB_URL = "https://api.github.com";
// const TOKEN = "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";

//Provider
export const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  //SearchUser List
  const SearchUsers = async (text) => {
    setLoading();

    console.log(text);

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`https://api.github.com/search/users?${params}`);

    const { items } = await res.json();
    dispatch({
      type: "GET-USERS",
      payload: items,
    });
  };

  //Search Repos
  const SearchRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const res = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`
    );

    const data = await res.json();
    dispatch({
      type: "GET-REPOS",
      payload: data,
    });
  };

  //User Deatils
  const userDeatils = async (login) => {
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //Clear seach
  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  //Loader Function
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        SearchUsers,
        clearSearch,
        user: state.user,
        userDeatils,
        repos: state.repos,
        SearchRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
