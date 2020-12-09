import { GET_POSTS, MAKE_POST, DELETE_POST } from "../reducers/postReducer";

export const makePost = (id, body) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${id}/posts`, {
      method: 'POST',
      body: JSON.stringify({ body })
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data)
      dispatch({ type: MAKE_POST, post: data });
    }
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
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {'Accept':'application/json',
        'Content-Type': 'application/json'
      }
      });
      if (res.ok) {
        return dispatch({ type: DELETE_POST, id: id })
      }
    } catch(e) {
      console.log(e)
    }
  }
}
