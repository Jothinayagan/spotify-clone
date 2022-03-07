export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
};

export const reducer = (state, action) => {
  console.log("Action", action);

  switch (action) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
