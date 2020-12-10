import { GET_LIKES, ADD_LIKE_TO_POST, DELETE_LIKE } from "../reducers/likeReducer";

export const getLikes = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/posts/${id}/likes`);
      const likes = await res.json();
      if (res.ok) {
        return dispatch({ type: GET_LIKES, ...likes })
      }
    } catch (e) {
      console.log(e);
    }
  }
};

export const addLikeToPost = (post_id, user_id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/posts/${post_id}/likes`, {
        method: 'POST',
        body: JSON.stringify({ user_id })
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: ADD_LIKE_TO_POST, like: data});
      }
    } catch(e) {
      console.log(e);
    }
  }
};

export const deleteLike = (post_id, user_id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/posts/${post_id}/user/${user_id}`, {
        method: 'DELETE',
        headers: {'Accept':'application/json',
        'Content-Type': 'application/json'
      }
      });
      if (res.ok) {
        const data = await res.json();
        const like_id = data.id
        return dispatch({ type: DELETE_LIKE, id: like_id })
      }
    } catch(e) {
      console.log(e);
    }
  }
};
