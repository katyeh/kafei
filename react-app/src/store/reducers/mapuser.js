import merge from "lodash/merge";
import { LOAD_USERS } from "../actions/users";

const mapuserReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_USERS: {
      const users = action.users.map((user) => ({ [user.id]: user }));
      return merge([], state, ...users)
    }
    default:
      return state
  };
};

export default mapuserReducer;
