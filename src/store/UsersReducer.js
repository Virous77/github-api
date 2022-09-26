const UsersReducer = (state, action) => {
  switch (action.type) {
    case "GET-USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case "GET-REPOS":
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default UsersReducer;
