import { SET_CURRENT_USER } from '../actions/currentUser';

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      // debugger
      return action.current.user[0]
    }

    default:
      return state;
  };
};

export default currentUserReducer;
