export const LOAD_USERS = "LOAD_USERS";
export const LOAD_USERS_HOME = "LOAD_USERS_HOME";
export const loadUsers = (users) => ({ type: LOAD_USERS, users });

export const getAllUsers = () => async (dispatch) => {
  const res = await fetch(`/api/users`)

  if (res.ok) {
    const { users } = await res.json()
    dispatch(loadUsers(users))
  }
};

export const getUsers = (id) => async (dispatch) => {
  if (!id) {
    const res = await fetch(`/api/users/${id}/home`);

    if (res.ok) {
      const { users } = await res.json();
      dispatch({
        type: LOAD_USERS_HOME,
        users: users
      });
    }
  }
}
