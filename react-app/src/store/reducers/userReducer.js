import merge from "lodash/merge";
import { LOAD_USERS, LOAD_USERS_HOME } from "../actions/users";

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_USERS: {
      const users = action.users.map((user) => ({ [user.id]: user }));
      return merge({}, state, ...users)
    }
    case LOAD_USERS_HOME:
      return {
        ...action.users
      }
    default:
      return state
  };
};

export default userReducer;
