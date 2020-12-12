import { SET_CURRENT_USER } from '../actions/currentUser';
export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';


const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return action.current.user[0]
    }
    case UPDATE_PROFILE_IMAGE:
      return {
        user: action.user
      }
    default:
      return state;
  };
};

export default currentUserReducer;
