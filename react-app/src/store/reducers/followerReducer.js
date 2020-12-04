export const GET_FOLLOWERS = 'GET_FOLLOWERS';

const followerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FOLLOWERS:
      return action.followers
    default:
      return state;
  }
};

export default followerReducer;
