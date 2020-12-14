import { SET_CURRENT_USER } from '../actions/currentUser';
export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_COVER_IMAGE = 'UPDATE_COVER_IMAGE';
export const UPDATE_BIO = 'UPDATE_BIO';

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return action.current.user[0]
    }
    case UPDATE_PROFILE_IMAGE:
      return {
        user: action.user
      }
    case UPDATE_COVER_IMAGE:
      return {
        user: action.user
      }
    case UPDATE_BIO:
      return {
        user: action.user
      }
    default:
      return state;
  };
};

export default currentUserReducer;
