export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const FOLLOW_USER = 'FOLLOW_USER';

const followerReducer = (state = [], action) => {
  // debugger
  switch (action.type) {
    case GET_FOLLOWERS:
      return action.followers
    case FOLLOW_USER:
      return {
        ...state,
        follower: action.follower_id,
      }
    default:
      return state;
  }
};

export default followerReducer;
