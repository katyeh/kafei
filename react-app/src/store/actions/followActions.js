import { GET_FOLLOWERS } from "../reducers/followerReducer";

export const getFollowers = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/users/${id}/followers`)
      const followers = await response.json();
      if (response.ok) {
        return dispatch({type: GET_FOLLOWERS, ...followers});
    }
    } catch(e) {
      console.log(e);
    }
  };
};
