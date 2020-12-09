import { GET_POSTS, MAKE_POST, DELETE_POST } from "../reducers/postReducer";

export const makePost = (id, body) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${id}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        body
      })
    })
    if (res.ok) {
      const data = await res.json();

      dispatch({ type: MAKE_POST, ...data });
      return data;
    }

      return await res.json();
    } catch(e) {
      console.log(e);
    }
  }
}

export const getPosts = (id) => {
  debugger
  return async (dispatch) => {
    try {
      debugger
      const res = await fetch(`/api/users/${id}/posts`)
      const posts = await res.json();
      if (res.ok) {
        return dispatch({ type: GET_POSTS, ...posts})
      }
    } catch(e) {
      console.log(e);
    }
  }
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`posts/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        const data = await res.json();

        return dispatch({type: DELETE_POST, ...data})
      }
    } catch(e) {
      console.log(e)
    }
  }
}
