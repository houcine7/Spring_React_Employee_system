export const actionType = {
  SET_USER: "SET_USER_DATA",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return false;
  }
};
