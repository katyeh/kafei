import { GET_FOLLOWING } from "../reducers/followingReducer";

export const getFollowing = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/users/${id}/following`)
      const following = await response.json();
      if (response.ok) {
        return dispatch({type: GET_FOLLOWING, ...following});
      }
    } catch(e) {
      console.log(e);
    }
  };
};
