import { MAKE_POST } from "../reducers/postReducer";

export const getPost = (id, body) => {
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
