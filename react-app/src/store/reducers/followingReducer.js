export const GET_FOLLOWING = 'GET_FOLLOWING';

const followingReducer = (state=[], action) => {
  switch (action.type) {
    case GET_FOLLOWING:
      return action.following
    default:
      return state;
  }
};

export default followingReducer;
