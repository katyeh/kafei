import { FOLLOW_USER, GET_FOLLOWERS } from "../reducers/followReducer";

export const getFollowers = (id) => {
  return async (dispatch) => {
    try {
      // debugger
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

export const follow = (follower_id, followed_id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${followed_id}/follow`, {
        method: 'POST',
        body: JSON.stringify({
          follower_id
        })
      });
      if (res.ok) {
        const data = await res.json();

        dispatch({
          type: FOLLOW_USER,
          ...data
        });
        return data;
      }

      return await res.json();
    } catch(e) {
      console.log(e);
    }
  }
}
