export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (current) => ({ type: SET_CURRENT_USER, current });

export const getOneUser = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`)
  if (res.ok) {
    const current = await res.json();
    dispatch(setCurrentUser(current))
  }
}
