import { LOAD_USERS_HOME, LOAD_USERS_SPLASH } from "../actions/users";

const userReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_USERS_HOME:
      return {
        ...action.users
      }
    case LOAD_USERS_SPLASH:
      return action.users
    default:
      return state
  };
};

export default userReducer;
