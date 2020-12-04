export const LOAD_FOLLOWERS = 'LOAD_FOLLOWERS';

export const loadFollowers = (followers) => ({ type: LOAD_FOLLOWERS, followers })

export default function followerReducer(state ={}, action) {
  switch (action.type) {
    case LOAD_FOLLOWERS: {
      return {
        ...state,
        followers: action.followers
      }
    }
    default: return state;
  }
}
