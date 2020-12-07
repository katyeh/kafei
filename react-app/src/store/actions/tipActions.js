import { GIVE_TIP } from "../reducers/tipReducer";

export const giveTip = (formData, recipient_id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${recipient_id}/tips`, {
        method: 'POST',
        body: formData
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
