import { loadFollowers } from "../reducers/followerReducer";

export const getFollowers = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/followers`)
  if (response.ok) {
    const followers = await response.json();
    dispatch(loadFollowers(followers));
  }
};
