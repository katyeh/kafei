import { FOLLOW_USER, GET_FOLLOWERS } from "../reducers/followReducer";


export const follow = (user_id, followed_id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${user_id}/follow/${followed_id}`, {
        method: 'POST'
      });
      if (res.ok) {
        const data = await res.json();

        dispatch({
          type: FOLLOW_USER,
          follower: data
        });
        return data;
      }

      return await res.json();
    } catch(e) {
      console.log(e);
    }
  }
}
