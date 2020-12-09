import { GIVE_TIP, GET_TIPS, DELETE_TIP } from "../reducers/tipReducer";

export const giveTip = (formData, recipient_id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${recipient_id}/tips`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json()
        return dispatch({ type: GIVE_TIP, tip: data });
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
};

export const deleteTip = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/transactions/${id}`, {
        method: 'DELETE',
        headers: {'Accept':'application/json',
        'Content-Type': 'application/json'
      }
      });
      if (res.ok) {
        return dispatch({ type: DELETE_TIP, id: id})
      }
    } catch(e) {
      console.log(e)
    }
  }
}
