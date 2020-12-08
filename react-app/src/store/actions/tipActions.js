import { GIVE_TIP, GET_TIPS } from "../reducers/tipReducer";

export const giveTip = (formData, recipient_id) => {
  return async dispatch => {
    try {
      // debugger
      const res = await fetch(`/api/users/${recipient_id}/tips`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json()

        return dispatch({
          type: GIVE_TIP,
          ...data
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const getTips = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/users/${id}/transactions`)
      const transactions = await res.json();
      if (res.ok) {
        return dispatch({ type: GET_TIPS, ...transactions })
      }
    } catch(e) {
      console.log(e);
    }
  }
}
