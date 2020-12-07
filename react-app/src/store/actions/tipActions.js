import { GIVE_TIP, GET_TIPS } from "../reducers/tipReducer";

export const giveTip = (formData, recipient_id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${recipient_id}/tips`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json()

        dispatch({
          type: GIVE_TIP,
          ...data
        });
        return data;
      }
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export const getTips = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`api/users/{id}/transactions`)
      const tips = await res.json();
      if (res.ok) {
        return dispatch({ type: GET_TIPS, tips })
      }
    } catch(e) {
      console.log(e);
    }
  }
}
