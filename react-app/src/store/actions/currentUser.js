import { UPDATE_PROFILE_IMAGE } from '../reducers/currentUser';

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (current) => ({ type: SET_CURRENT_USER, current });

export const getOneUser = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`)
  if (res.ok) {
    const current = await res.json();
    dispatch(setCurrentUser(current))
  }
}

export const updateProfileImage = (formData, id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${id}/profile_image`, {
        method: 'PUT',
        body: formData
      });
      if (res.ok) {
        const user = await res.json();
        dispatch({ type: UPDATE_PROFILE_IMAGE, user: user })
      }
    } catch(e) {
      console.log(e)
    }
  }
};
