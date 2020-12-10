export const FOLLOW_USER = 'FOLLOW_USER';

const followerReducer = (state = [], action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        follower: action.follower
      }
    default:
      return state;
  }
};

export default followerReducer;
