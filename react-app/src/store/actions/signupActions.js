import { LOAD_USER } from '../reducers/signupReducer';

export const signupUser = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        body: user
      });

      if (res.ok) {
        const data = await res.json();

        dispatch({
          type: LOAD_USER,
          ...data
        });
        localStorage.setItem("user_id", data.id)
        return data;
      }

      return await res.json();
    } catch(e) {
      // console.log(e);
    }
  }
}

export const loadUser = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`)

  if (res.ok) {
    const data = await res.json();
    // console.log("DATA:", data)
    dispatch({
      type: LOAD_USER,
      ...data.user[0]
    });
  }
}
