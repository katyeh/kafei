export const LOAD_USERS = "LOAD_USERS";
export const LOAD_USERS_HOME = "LOAD_USERS_HOME";
export const LOAD_USERS_SPLASH = "LOAD_USERS_SPLASH";
export const loadUsers = (users) => ({ type: LOAD_USERS, users });

export const getAllUsers = () => async (dispatch) => {
  const res = await fetch(`/api/users`)

  if (res.ok) {
    const { users } = await res.json()
    dispatch(loadUsers(users))
  }
};

export const getUsers = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}/home`)
  if (res.ok) {
    const { users } = await res.json();
    dispatch({
      type: LOAD_USERS_HOME,
      users: users
    });
  };
};

export const getUsersSplash = () => async (dispatch) => {
  const res = await fetch(`/api/users/splash`)
  if (res.ok) {
    const { users } = await res.json();
    dispatch({
      type: LOAD_USERS_SPLASH,
      users: users
    });
  };
};
